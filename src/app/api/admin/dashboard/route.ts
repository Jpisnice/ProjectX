import { NextResponse } from 'next/server';
import { doQuery } from '@/lib/db';

// Helper function to get week number from a date
const getWeekOfMonth = (date: Date) => {
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  return Math.ceil((date.getDate() + startOfMonth.getDay()) / 7);
};

// Convert date to day/month format
const formatDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${day}/${month}`;
};

// Fetch wards data and top issues
export async function GET() {
  try {
    // Fetch wards data using PostgreSQL
    const wards = await doQuery<{ id: number; name: string; description: string }>(
      'SELECT id, name, description FROM wards'
    );

    // Fetch issues data using PostgreSQL
    const issues = await doQuery<{ id: number; title: string; created_at: string; ward_id: number; description: string }>(
      'SELECT id, title, created_at, ward_id , description FROM issues WHERE resolved = 0'
    );

    // Process the wards data
    const formattedWards = await Promise.all(
      wards.map(async (ward) => {
        const weeklyCounts: { week: string; issue: number }[] = [];
        const currentDate = new Date();

        // Process data for each week in the month for all issues
        for (let i = 1; i <= 4; i++) {
          const startOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), (i - 1) * 7 + 1);
          const endOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), i * 7);

          // Ensure endOfWeek doesn't exceed the month's last date
          endOfWeek.setDate(Math.min(endOfWeek.getDate(), new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()));

          const startDate = formatDate(startOfWeek);
          const endDate = formatDate(endOfWeek);

          const issuesCount = issues.filter((issue) => {
            const issueDate = new Date(issue.created_at);
            const weekOfMonth = getWeekOfMonth(issueDate);
            return weekOfMonth === i && issueDate.getMonth() === currentDate.getMonth() && issueDate.getFullYear() === currentDate.getFullYear();
          }).length;

          weeklyCounts.push({
            week: `${startDate} - ${endDate}`,
            issue: issuesCount,
          });
        }

        return {
          title: ward.name,
          description: ward.description,
          chartData: weeklyCounts,
        };
      })
    );

    // Process top issues
    const topIssues = issues.map((issue, index) => ({
      rank: index + 1,
      title: issue.title,
      description: issue.description,
      wardName: wards.find((ward) => ward.id === issue.ward_id)?.name || 'Unknown Ward',
    }));

    // Format the response
    const response = {
      wards: formattedWards,
      topIssues,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return NextResponse.error();
  }
}
