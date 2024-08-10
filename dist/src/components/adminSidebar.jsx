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
exports.LogoIcon = exports.Logo = void 0;
exports.AdminSidebar = AdminSidebar;
const react_1 = __importStar(require("react"));
const sidebar_1 = require("@/components/ui/sidebar");
const icons_react_1 = require("@tabler/icons-react");
const link_1 = __importDefault(require("next/link"));
const framer_motion_1 = require("framer-motion");
const image_1 = __importDefault(require("next/image"));
const utils_1 = require("@/lib/utils");
function AdminSidebar() {
    const [open, setOpen] = (0, react_1.useState)(true);
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
    return (<div className={(0, utils_1.cn)("flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700", "h-screen")}>
      <sidebar_1.Sidebar open={open} setOpen={setOpen} animate={true}>
        <sidebar_1.SidebarBody className="flex flex-col justify-between gap-10 h-full w-64 md:w-80">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <exports.Logo />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (<link_1.default key={idx} href={link.href} className="flex items-center gap-2 p-2 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-md">
                  {link.icon}
                  {open && <span>{link.label}</span>}
                </link_1.default>))}
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-md">
            <link_1.default href="#" className="flex items-center">
              <div className="relative h-7 w-7">
                <image_1.default src="https://assets.aceternity.com/manu.png" className="absolute inset-0 object-cover rounded-full" fill alt="Avatar"/>
              </div>
              {open && <span>Manu Arora</span>}
            </link_1.default>
          </div>
        </sidebar_1.SidebarBody>
      </sidebar_1.Sidebar>
    </div>);
}
const Logo = () => {
    return (<link_1.default href="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0"/>
      <framer_motion_1.motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium text-black dark:text-white whitespace-pre">
        Acet Labs
      </framer_motion_1.motion.span>
    </link_1.default>);
};
exports.Logo = Logo;
const LogoIcon = () => {
    return (<link_1.default href="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div className="h-fit w-fit bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0"/>
    </link_1.default>);
};
exports.LogoIcon = LogoIcon;
