
import React from "react";
import { Separator } from "@/components/ui/separator";
import { ChartCard } from "@/components/admin-components/ChartCard";
import  CustomCard  from "@/components/admin-components/RankedIssue";
import { TrendingUp } from "lucide-react";
import RankedIssue from "@/components/admin-components/RankedIssue";


const Dashboard = () => {
  return (
    <div className="m-3 h-full flex flex-col">
      <div className="font-bold text-2xl">Hello Admin</div>
      <Separator />
      <div className="flex-1 overflow-y-auto mt-4">
        <span className="m-5">
          <div className="flex items-start justify-center gap-5 flex-wrap">
            {/* Bar Chart Card */}
            <ChartCard
              title="Ward 1"
              description="Address"
              chartData={[
                { week: "1/7", issue: 10 },
                { week: "7/7", issue: 0 },
                { week: "14/7", issue: 20 },
                { week: "28/7", issue: 15 },
                { week: "31/7", issue: 30 },
              ]}
            />
            <ChartCard
              title="Ward 1"
              description="Address"
              chartData={[
                { week: "1/7", issue: 10 },
                { week: "7/7", issue: 0 },
                { week: "14/7", issue: 20 },
                { week: "28/7", issue: 15 },
                { week: "31/7", issue: 30 },
              ]}
            />
            <ChartCard
              title="Ward 1"
              description="Address"
              chartData={[
                { week: "1/7", issue: 10 },
                { week: "7/7", issue: 0 },
                { week: "14/7", issue: 20 },
                { week: "28/7", issue: 15 },
                { week: "31/7", issue: 30 },
              ]}
            />
            <ChartCard
              title="Ward 1"
              description="Address"
              chartData={[
                { week: "1/7", issue: 10 },
                { week: "7/7", issue: 0 },
                { week: "14/7", issue: 20 },
                { week: "28/7", issue: 15 },
                { week: "31/7", issue: 30 },
              ]}
            />
            <ChartCard
              title="Ward 1"
              description="Address"
              chartData={[
                { week: "1/7", issue: 10 },
                { week: "7/7", issue: 0 },
                { week: "14/7", issue: 20 },
                { week: "28/7", issue: 15 },
                { week: "31/7", issue: 30 },
              ]}
            />
            <ChartCard
              title="Ward 1"
              description="Address"
              chartData={[
                { week: "1/7", issue: 10 },
                { week: "7/7", issue: 0 },
                { week: "14/7", issue: 20 },
                { week: "28/7", issue: 15 },
                { week: "31/7", issue: 30 },
              ]}
            />
          </div>
        </span>
        <Separator />
        <span className="m-7">
          <div className="font-bold text-2xl">Top Issues</div>
          <RankedIssue
            rank={1}
            title="Road Repair Needed"
            description="There is a significant pothole on Main Street that needs urgent repair."
            wardName="Ward 1"
          />
          <RankedIssue
            rank={2}
            title="Street Light Outage"
            description="The street lights on Elm Street have been out for over a week."
            wardName="Ward 2"
          />
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
