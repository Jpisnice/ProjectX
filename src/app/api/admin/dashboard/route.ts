import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Database connection setup
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projectx'
});

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
        // Connect to the database
        const connection = await pool.getConnection();

        // Fetch wards data
        const [wards]: [any[], any] = await connection.query(
            'SELECT id, name, description FROM wards'
        );

        // Fetch issues data
        const [issues]: [any[], any] = await connection.query(
            'SELECT id, title, created_at, ward_id FROM issues WHERE resolved = 0'
        );

        // Disconnect from the database
        connection.release();

        // Process the wards data
        const formattedWards = await Promise.all(wards.map(async (ward: any) => {
            const weeklyCounts: { week: string, issue: number }[] = [];
            const currentDate = new Date();
            
            // Process data for each week in the month for all issues
            for (let i = 1; i <= 4; i++) { // Assuming max 4 weeks in a month
                const startOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), (i - 1) * 7 + 1);
                const endOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), i * 7);
                
                // Ensure endOfWeek doesn't exceed the month's last date
                endOfWeek.setDate(Math.min(endOfWeek.getDate(), new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()));

                const startDate = formatDate(startOfWeek);
                const endDate = formatDate(endOfWeek);

                const issuesCount = issues.filter((issue: any) => {
                    const issueDate = new Date(issue.created_at);
                    const weekOfMonth = getWeekOfMonth(issueDate);
                    return weekOfMonth === i && issueDate.getMonth() === currentDate.getMonth() && issueDate.getFullYear() === currentDate.getFullYear();
                }).length;

                weeklyCounts.push({
                    week: `${startDate} - ${endDate}`,
                    issue: issuesCount
                });
            }

            return {
                title: ward.name,
                description: ward.description,
                chartData: weeklyCounts
            };
        }));

        // Process top issues
        const topIssues = issues.map((issue: any, index: number) => ({
            rank: index + 1,
            title: issue.title,
            description: issue.description,
            wardName: wards.find((ward: any) => ward.id === issue.ward_id)?.name || 'Unknown Ward'
        }));

        // Format the response
        const response = {
            wards: formattedWards,
            topIssues
        };

        return NextResponse.json(response);
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        return NextResponse.error();
    }
}
