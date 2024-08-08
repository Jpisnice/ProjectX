"use client";

import { Bar, BarChart } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

// Chart component definition
export function Chart({
  chartData,
  chartConfig,
  dataKeys,
}: {
  chartData: Array<{ week: string; [key: number]: number }>;
  chartConfig: ChartConfig;
  dataKeys: { key1: string; key2: string };
}) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar
          dataKey={dataKeys.key1}
          fill="var(--color-desktop)"
          radius={4}
        />
        <Bar dataKey={dataKeys.key2} fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
//Example usage inside a component:
// import React from "react";
// import { Chart } from "@/components/Chart";

// const chartData = [
//   { week: "1/7", desktop: 186, mobile: 80 },
//   { week: "7/7", desktop: 305, mobile: 200 },
//   { week: "14/7", desktop: 237, mobile: 120 },
//   { week: "21/7", desktop: 73, mobile: 190 },
//   { week: "28/7", desktop: 209, mobile: 130 },
//   { week: "35/7", desktop: 214, mobile: 140 },
// ];

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "#2563eb",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "#60a5fa",
//   },
// };

// const dataKeys = {
//   desktop: "desktop",
//   mobile: "mobile",
// };

// export default function Dashboard() {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <Chart
//         chartData={chartData}
//         chartConfig={chartConfig}
//         dataKeys={dataKeys}
//       />
//     </div>
//   );
// }
