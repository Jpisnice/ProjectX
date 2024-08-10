"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chart = Chart;
const recharts_1 = require("recharts");
const chart_1 = require("@/components/ui/chart");
function Chart({ chartData, chartConfig, dataKeys, chartType, fillColors = {}, // Default values for fill parameters
 }) {
    const { key1Fill = "var(--color-desktop)", fillOpacity = 0.4, strokeColor = "var(--color-desktop)", } = fillColors;
    if (chartType !== "area") {
        return null; // Return null if the chart type is not "area"
    }
    return (<chart_1.ChartContainer config={chartConfig} className="min-h-[250px] w-full">
      <recharts_1.AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
        <recharts_1.CartesianGrid vertical={true}/>
        <recharts_1.XAxis dataKey="week" // Set to "week" for x-axis data
     tickLine={false} axisLine={true} tickMargin={8} tickFormatter={(value) => value.slice(0, 5)} // Format week data
    />
        <chart_1.ChartTooltip cursor={true} content={<chart_1.ChartTooltipContent indicator="dot" hideLabel/>}/>
        <recharts_1.Area dataKey={dataKeys.key1} type="linear" fill={key1Fill} fillOpacity={fillOpacity} stroke={strokeColor}/>
      </recharts_1.AreaChart>
    </chart_1.ChartContainer>);
}
