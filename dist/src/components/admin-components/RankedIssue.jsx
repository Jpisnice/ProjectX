"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const card_1 = require("@/components/ui/card");
const separator_1 = require("@/components/ui/separator");
const lucide_react_1 = require("lucide-react");
const RankedIssue = ({ rank, title, description, wardName, }) => {
    return (<div className="m-3">
      <card_1.Card className="w-full h-auto p-4 shadow-lg flex items-center justify-between content-center">
        <div className="flex items-center flex-grow">
          <card_1.CardHeader>
            <card_1.CardTitle>{rank}</card_1.CardTitle>
          </card_1.CardHeader>
          <separator_1.Separator orientation="vertical" className="h-10 w-[1px] bg-gray-300 mx-4"/>
          <card_1.CardContent>
            <card_1.CardTitle className="flex justify-between">{title}</card_1.CardTitle>
            <card_1.CardDescription>{description}</card_1.CardDescription>
          </card_1.CardContent>
        </div>
        <div className="flex items-center">
          <separator_1.Separator orientation="vertical" className="h-10 w-[1px] bg-gray-400 mx-4"/>
          <card_1.CardFooter className="flex items-center gap-2">
            <lucide_react_1.MapPin />
            <card_1.CardTitle>{wardName}</card_1.CardTitle>
          </card_1.CardFooter>
        </div>
      </card_1.Card>
    </div>);
};
exports.default = RankedIssue;
