"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SettingsPage = () => {
    return (<div>
      <div className="font-bold text-2xl">Ward Stats</div>
      <div className="flex-1 overflow-y-auto mt-4">
        <h1>Details of Wards</h1>
        {/* Add your Profile content here */}
      </div>
    </div>);
    <div>
      <div className="font-bold text-2xl">Issues</div>
      <div className="flex-1 overflow-y-auto mt-4">
        <h1>Here are the issues</h1>
        {/* Add your Profile content here */}
      </div>
    </div>;
};
exports.default = SettingsPage;
