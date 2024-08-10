"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = void 0;
exports.AdminSidebarMobile = AdminSidebarMobile;
const react_1 = __importStar(require("react"));
const icons_react_1 = require("@tabler/icons-react");
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const utils_1 = require("@/lib/utils");
function AdminSidebarMobile() {
    const [open, setOpen] = (0, react_1.useState)(false);
    const links = [
        {
            label: "Dashboard",
            href: "/admin/dashboard",
            icon: (<icons_react_1.IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"/>),
        },
        {
            label: "Profile",
            href: "/admin/profile",
            icon: (<icons_react_1.IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"/>),
        },
        {
            label: "Settings",
            href: "/admin/settings",
            icon: (<icons_react_1.IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"/>),
        },
        {
            label: "Logout",
            href: "#",
            icon: (<icons_react_1.IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"/>),
        },
    ];
    return (<div className={(0, utils_1.cn)("flex flex-col bg-gray-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700", "md:hidden h-screen")}>
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4">
          <exports.Logo />
          <button onClick={() => setOpen(!open)} className="text-neutral-700 dark:text-neutral-200">
            <icons_react_1.IconArrowLeft className="h-5 w-5"/>
          </button>
        </div>
        {open && (<div className="flex flex-col gap-2 px-4">
            {links.map((link, idx) => (<link_1.default key={idx} href={link.href} className="flex items-center gap-2 p-2 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-md">
                {link.icon}
                <span>{link.label}</span>
              </link_1.default>))}
          </div>)}
        <div className="flex items-center gap-2 p-4">
          <link_1.default href="#" className="flex items-center">
            <div className="relative h-7 w-7">
              <image_1.default src="https://assets.aceternity.com/manu.png" className="absolute inset-0 object-cover rounded-full" fill alt="Avatar"/>
            </div>
            <span>Manu Arora</span>
          </link_1.default>
        </div>
      </div>
    </div>);
}
const Logo = () => {
    return (<link_1.default href="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0"/>
      <span className="font-medium text-black dark:text-white whitespace-pre">
        Acet Labs
      </span>
    </link_1.default>);
};
exports.Logo = Logo;
