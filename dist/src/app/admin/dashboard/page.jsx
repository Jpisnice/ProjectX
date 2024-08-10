"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const separator_1 = require("@/components/ui/separator");
const ChartCard_1 = require("@/components/admin-components/ChartCard");
const RankedIssue_1 = __importDefault(require("@/components/admin-components/RankedIssue"));
const Dashboard = () => {
    return (<div className="m-3 h-full flex flex-col">
      <div className="font-bold text-2xl">Hello Admin</div>
      <separator_1.Separator />
      <div className="flex-1 overflow-y-auto mt-4">
        <span className="m-5">
          <div className="flex items-start justify-center gap-5 flex-wrap">
            {/* Bar Chart Card */}
            <ChartCard_1.ChartCard title="Ward 1" description="Address" chartData={[
            { week: "1/7", issue: 10 },
            { week: "7/7", issue: 0 },
            { week: "14/7", issue: 20 },
            { week: "28/7", issue: 15 },
            { week: "31/7", issue: 30 },
        ]}/>
            <ChartCard_1.ChartCard title="Ward 1" description="Address" chartData={[
            { week: "1/7", issue: 10 },
            { week: "7/7", issue: 0 },
            { week: "14/7", issue: 20 },
            { week: "28/7", issue: 15 },
            { week: "31/7", issue: 30 },
        ]}/>
            <ChartCard_1.ChartCard title="Ward 1" description="Address" chartData={[
            { week: "1/7", issue: 10 },
            { week: "7/7", issue: 0 },
            { week: "14/7", issue: 20 },
            { week: "28/7", issue: 15 },
            { week: "31/7", issue: 30 },
        ]}/>
            <ChartCard_1.ChartCard title="Ward 1" description="Address" chartData={[
            { week: "1/7", issue: 10 },
            { week: "7/7", issue: 0 },
            { week: "14/7", issue: 20 },
            { week: "28/7", issue: 15 },
            { week: "31/7", issue: 30 },
        ]}/>
            <ChartCard_1.ChartCard title="Ward 1" description="Address" chartData={[
            { week: "1/7", issue: 10 },
            { week: "7/7", issue: 0 },
            { week: "14/7", issue: 20 },
            { week: "28/7", issue: 15 },
            { week: "31/7", issue: 30 },
        ]}/>
            <ChartCard_1.ChartCard title="Ward 1" description="Address" chartData={[
            { week: "1/7", issue: 10 },
            { week: "7/7", issue: 0 },
            { week: "14/7", issue: 20 },
            { week: "28/7", issue: 15 },
            { week: "31/7", issue: 30 },
        ]}/>
          </div>
        </span>
        <separator_1.Separator />
        <span className="m-7">
          <div className="font-bold text-2xl">Top Issues</div>
          <RankedIssue_1.default rank={1} title="Road Repair Needed" description="There is a significant pothole on Main Street that needs urgent repair." wardName="Ward 1"/>
          <RankedIssue_1.default rank={2} title="Street Light Outage" description="The street lights on Elm Street have been out for over a week." wardName="Ward 2"/>
        </span>
      </div>
    </div>);
};
exports.default = Dashboard;
