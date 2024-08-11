"use client";
import React from "react";
import { type ChartConfig } from "@/components/ui/chart";
import { WardIssuesComponent } from "@/components/admin-components/wardConsole";

//define type or overview data
type OverviewData = {
  date: string;
  [key: string]: number | string;
};

// Define type for chart items
type ChartItem = {
  label: string;
  color: string;
};

// Define the available colors
const availableColors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

// Function to create chart config dynamically
function createChartConfig(wardNames: string[]): ChartConfig {
  const config: ChartConfig = {};

  wardNames.forEach((wardName, index) => {
    config[`item${index + 1}`] = {
      label: wardName,
      color: availableColors[index % availableColors.length], // Ensure unique colors
    };
  });

  return config;
}

// Sample data for ward issues
const wardData = {
  Northwood: [
    { date: "2024-08-01", issues: 5 },
    { date: "2024-08-03", issues: 8 },
    { date: "2024-08-05", issues: 12 },
    { date: "2024-08-07", issues: 4 },
    { date: "2024-08-09", issues: 7 },
    { date: "2024-08-11", issues: 6 },
    { date: "2024-08-13", issues: 9 },
    { date: "2024-08-15", issues: 3 },
    { date: "2024-08-17", issues: 10 },
    { date: "2024-08-19", issues: 8 },
  ],
  Southgate: [
    { date: "2024-08-01", issues: 3 },
    { date: "2024-08-03", issues: 6 },
    { date: "2024-08-05", issues: 10 },
    { date: "2024-08-07", issues: 2 },
    { date: "2024-08-09", issues: 5 },
    { date: "2024-08-11", issues: 7 },
    { date: "2024-08-13", issues: 8 },
    { date: "2024-08-15", issues: 4 },
    { date: "2024-08-17", issues: 11 },
    { date: "2024-08-19", issues: 6 },
  ],
  Eastfield: [
    { date: "2024-08-01", issues: 7 },
    { date: "2024-08-03", issues: 9 },
    { date: "2024-08-05", issues: 15 },
    { date: "2024-08-07", issues: 6 },
    { date: "2024-08-09", issues: 10 },
    { date: "2024-08-11", issues: 4 },
    { date: "2024-08-13", issues: 12 },
    { date: "2024-08-15", issues: 8 },
    { date: "2024-08-17", issues: 14 },
    { date: "2024-08-19", issues: 9 },
  ],
  Westview: [
    { date: "2024-08-01", issues: 2 },
    { date: "2024-08-03", issues: 4 },
    { date: "2024-08-05", issues: 6 },
    { date: "2024-08-07", issues: 8 },
    { date: "2024-08-09", issues: 5 },
    { date: "2024-08-11", issues: 7 },
    { date: "2024-08-13", issues: 3 },
    { date: "2024-08-15", issues: 6 },
    { date: "2024-08-17", issues: 9 },
    { date: "2024-08-19", issues: 4 },
  ],
  "Central Park": [
    { date: "2024-08-01", issues: 6 },
    { date: "2024-08-03", issues: 8 },
    { date: "2024-08-05", issues: 7 },
    { date: "2024-08-07", issues: 5 },
    { date: "2024-08-09", issues: 9 },
    { date: "2024-08-11", issues: 10 },
    { date: "2024-08-13", issues: 8 },
    { date: "2024-08-15", issues: 6 },
    { date: "2024-08-17", issues: 7 },
    { date: "2024-08-19", issues: 11 },
  ],
  Riverdale: [
    { date: "2024-08-01", issues: 4 },
    { date: "2024-08-03", issues: 6 },
    { date: "2024-08-05", issues: 5 },
    { date: "2024-08-07", issues: 7 },
    { date: "2024-08-09", issues: 8 },
    { date: "2024-08-11", issues: 9 },
    { date: "2024-08-13", issues: 10 },
    { date: "2024-08-15", issues: 11 },
    { date: "2024-08-17", issues: 7 },
    { date: "2024-08-19", issues: 5 },
  ],
};


// Generate overview data dynamically based on wardData
function generateOverviewData(
  wardData: Record<string, { date: string; issues: number }[]>
): { date: string; [key: string]: number }[] {
  // Create a map to aggregate issues by date for each ward
  const dateMap: Record<string, Record<string, number>> = {};

  // Aggregate issues by date for each ward
  Object.entries(wardData).forEach(([wardName, data]) => {
    data.forEach(({ date, issues }) => {
      if (!dateMap[date]) {
        dateMap[date] = {};
      }
      dateMap[date][wardName] = issues;
    });
  });

  // Convert the aggregated data to the desired format
  return Object.entries(dateMap).map(([date, issues]) => ({
    date,
    ...issues,
  }));
}


// Define ward names
const wardNames = Object.keys(wardData);

// Create chart configuration dynamically
const chartConfig = createChartConfig(wardNames);

// Generate the overview data
const overviewData = generateOverviewData(wardData);

const SettingsPage = () => {
  return (
    <div>
      <div className="font-bold text-2xl">Ward Stats</div>
      <div className="flex-1 overflow-y-auto mt-4">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Ward Issues Dashboard</h1>
          <WardIssuesComponent
            chartConfig={chartConfig}
            wardData={wardData}
            overviewData={overviewData}
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
