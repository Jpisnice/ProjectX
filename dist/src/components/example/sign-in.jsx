"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SignupFormDemo;
const react_1 = __importDefault(require("react"));
const label_1 = require("../ui/label");
const input_1 = require("../ui/input");
const utils_1 = require("@/lib/utils");
const icons_react_1 = require("@tabler/icons-react");
const separator_1 = require("@/components/ui/separator");
const card_1 = require("@/components/ui/card");
function SignupFormDemo() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    const handleSocialSubmit = (e) => {
        e.preventDefault();
        console.log("Social form submitted");
    };
    return (<div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to ProjectX
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p>

      <div className="flex my-8">
        <form className="flex-1 m-3" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <label_1.Label htmlFor="firstname">First name</label_1.Label>
              <input_1.Input id="firstname" placeholder="Tyler" type="text"/>
            </LabelInputContainer>
            <LabelInputContainer>
              <label_1.Label htmlFor="lastname">Last name</label_1.Label>
              <input_1.Input id="lastname" placeholder="Durden" type="text"/>
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <label_1.Label htmlFor="email">Email Address</label_1.Label>
            <input_1.Input id="email" placeholder="projectmayhem@fc.com" type="email"/>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <label_1.Label htmlFor="password">Password</label_1.Label>
            <input_1.Input id="password" placeholder="••••••••" type="password"/>
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <label_1.Label htmlFor="twitterpassword">Your twitter password</label_1.Label>
            <input_1.Input id="twitterpassword" placeholder="••••••••" type="password"/>
          </LabelInputContainer>

          <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]" type="submit">
            Sign up &rarr;
            {/* <BottomGradient /> */}
          </button>
        </form>
        <separator_1.Separator orientation="vertical"/>
        <card_1.Card>
          <card_1.CardHeader>
            <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
              Or Signup With
            </h3>
          </card_1.CardHeader>

          <card_1.CardContent>
            <form className="flex-1 m-3" onSubmit={handleSocialSubmit}>
            
              <div className="flex flex-col space-y-4">
                <button className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]" type="submit">
                  <icons_react_1.IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    GitHub
                  </span>
                  <BottomGradient />
                </button>
                <button className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]" type="submit">
                  <icons_react_1.IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300"/>
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Google
                  </span>
                  <BottomGradient />
                </button>
              </div>
            </form>
          </card_1.CardContent>
          <card_1.CardFooter>
            <p className="text-neutral-600 text-sm dark:text-neutral-300 flex overflow-auto">
              We don&apos;t store your social data
            </p>
          </card_1.CardFooter>
        </card_1.Card>
      </div>
    </div>);
}
const BottomGradient = () => {
    return (<>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"/>
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"/>
    </>);
};
const LabelInputContainer = ({ children, className, }) => {
    return (<div className={(0, utils_1.cn)("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>);
};
