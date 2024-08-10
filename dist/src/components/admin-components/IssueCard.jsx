"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_separator_1 = require("@radix-ui/react-separator");
const lucide_react_1 = require("lucide-react");
const IssueCard = ({ title, description, ward, location, isResolved, }) => {
    return (<div className="flex items-start bg-white m-3 p-4 rounded-xl text-black shadow-lg cursor-pointer max-w-sm">
      <div className="flex-shrink-0">
        <img src="https://via.placeholder.com/100" alt="Issue" className="h-24 w-24 object-cover rounded-lg"/>
      </div>
      <react_separator_1.Separator className="h-24 w-[2px] bg-gray-300 mx-4" orientation="vertical"/>
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <div className={`flex items-center gap-2 ${isResolved ? "text-green-600" : "text-red-600"}`}>
            {isResolved ? (<lucide_react_1.CheckCircle className="h-5 w-5"/>) : (<lucide_react_1.XCircle className="h-5 w-5"/>)}
            <span className="font-normal text-sm">
              {isResolved ? "Resolved" : "Unresolved"}
            </span>
          </div>
        </div>
        <react_separator_1.Separator orientation="horizontal" className="bg-gray-300 my-2"/>
        <div className="mb-2">
          <p className="text-sm text-gray-700">
            {description.length > 45
            ? description.slice(0, 45) + "..."
            : description}
          </p>
        </div>
        <react_separator_1.Separator orientation="horizontal" className="bg-gray-300 my-2"/>
        <div className="flex justify-between items-center text-gray-500">
          <div className="flex items-center gap-1">
            <lucide_react_1.MapPin className="h-4 w-4"/>
            <p className="text-sm">{ward}</p>
          </div>
          <div className="flex items-center gap-1">
            <lucide_react_1.AlertCircle className="h-4 w-4"/>
            <p className="text-sm">{location}</p>
          </div>
        </div>
      </div>
    </div>);
};
exports.default = IssueCard;
