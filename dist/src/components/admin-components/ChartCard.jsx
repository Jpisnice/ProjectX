"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartCard = ChartCard;
const card_1 = require("@/components/ui/card");
const chart_1 = require("@/components/admin-components/chart");
// Default chart configuration
const defaultChartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
};
// ChartCard functional component
function ChartCard({ title, description, chartData, footerContent, }) {
    return (<card_1.Card>
      <card_1.CardHeader>
        <card_1.CardTitle>{title}</card_1.CardTitle>
        <card_1.CardDescription>{description}</card_1.CardDescription>
      </card_1.CardHeader>
      <card_1.CardContent>
        <chart_1.Chart chartData={chartData} chartConfig={defaultChartConfig} dataKeys={{ key1: "issue" }} chartType="area" // Always render area chart
     fillColors={{
            key1Fill: "var(--color-desktop)", // Default fill color
            fillOpacity: 0.6, // Default fill opacity
        }}/>
      </card_1.CardContent>
      {footerContent && <card_1.CardFooter>{footerContent}</card_1.CardFooter>}
    </card_1.Card>);
}
