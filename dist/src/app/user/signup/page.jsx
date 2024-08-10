"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SignupPage;
const sign_in_1 = __importDefault(require("@/components/example/sign-in"));
const card_1 = require("@/components/ui/card");
function SignupPage() {
    return (<div className="flex flex-col items-center justify-center h-screen">
      <card_1.Card className="m-20 p-30">
        <sign_in_1.default />
      </card_1.Card>
    </div>);
}
