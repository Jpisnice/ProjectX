import React from "react";
import { Separator } from "@/components/ui/separator";
import { ChartCard } from "@/components/admin-components/ChartCard";
import RankedIssue from "@/components/admin-components/RankedIssue";

// Sample data arrays
const wards = [
  {
    title: "Ward 1",
    description: "Main Street",
    chartData: [
      { week: "1/7", issue: 10 },
      { week: "7/7", issue: 0 },
      { week: "14/7", issue: 20 },
      { week: "28/7", issue: 15 },
      { week: "31/7", issue: 30 },
    ],
  },
  {
    title: "Ward 2",
    description: "Elm Street",
    chartData: [
      { week: "1/7", issue: 5 },
      { week: "7/7", issue: 15 },
      { week: "14/7", issue: 25 },
      { week: "28/7", issue: 10 },
      { week: "31/7", issue: 20 },
    ],
  },
  // Add more wards as needed
];

const topIssues = [
  {
    rank: 1,
    title: "Road Repair Needed",
    description:
      "There is a significant pothole on Main Street that needs urgent repair.",
    wardName: "Ward 1",
  },
  {
    rank: 2,
    title: "Street Light Outage",
    description:
      "The street lights on Elm Street have been out for over a week.",
    wardName: "Ward 2",
  },
  // Add more issues as needed
];

const Dashboard = () => {
  return (
    <div className="m-3 h-full flex flex-col">
      <div className="font-bold text-2xl">Hello Admin</div>
      <Separator />
      <div className="flex-1 overflow-y-auto mt-4">
        <div className="flex items-start justify-center gap-5 flex-wrap m-3">
          {wards.map((ward, index) => (
            <ChartCard
              key={index}
              title={ward.title}
              description={ward.description}
              chartData={ward.chartData}
            />
          ))}
        </div>
        <Separator className="m-5"/>
        <div className="m-7">
          <div className="font-bold text-2xl">Top Issues</div>
          {topIssues.map((issue, index) => (
            <RankedIssue
              key={index}
              rank={issue.rank}
              title={issue.title}
              description={issue.description}
              wardName={issue.wardName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
