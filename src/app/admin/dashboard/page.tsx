"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Chart } from "@/components/admin-components/chart";
import { ChartCard } from "@/components/admin-components/ChartCard";
import { TrendingUp } from "lucide-react";


const Dashboard = () => {
  return (
    <div className="m-3">
      <div className="font-bold text-2xl">Hello Admin</div>
      <Separator />
      <div className="m-3 flex items-start gap-5 flex-wrap">
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
        
      </div>
    </div>
  );
};

export default Dashboard;
