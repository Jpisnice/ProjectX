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
exports.SidebarLink = exports.MobileSidebar = exports.DesktopSidebar = exports.SidebarBody = exports.Sidebar = exports.SidebarProvider = exports.useSidebar = void 0;
const utils_1 = require("@/lib/utils");
const link_1 = __importDefault(require("next/link"));
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const icons_react_1 = require("@tabler/icons-react");
const SidebarContext = (0, react_1.createContext)(undefined);
const useSidebar = () => {
    const context = (0, react_1.useContext)(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};
exports.useSidebar = useSidebar;
const SidebarProvider = ({ children, open: openProp, setOpen: setOpenProp, animate = true, }) => {
    const [openState, setOpenState] = (0, react_1.useState)(false);
    const open = openProp !== undefined ? openProp : openState;
    const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;
    return (<SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>);
};
exports.SidebarProvider = SidebarProvider;
const Sidebar = ({ children, open, setOpen, animate, }) => {
    return (<exports.SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </exports.SidebarProvider>);
};
exports.Sidebar = Sidebar;
const SidebarBody = (props) => {
    return (<>
      <exports.DesktopSidebar {...props}/>
      <exports.MobileSidebar {...props}/>
    </>);
};
exports.SidebarBody = SidebarBody;
const DesktopSidebar = ({ className, children, ...props }) => {
    const { open, setOpen, animate } = (0, exports.useSidebar)();
    return (<>
      <framer_motion_1.motion.div className={(0, utils_1.cn)("h-full px-4 py-4 hidden  md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0", className)} animate={{
            width: animate ? (open ? "300px" : "60px") : "300px",
        }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} {...props}>
        {children}
      </framer_motion_1.motion.div>
    </>);
};
exports.DesktopSidebar = DesktopSidebar;
const MobileSidebar = ({ className, children, ...props }) => {
    const { open, setOpen } = (0, exports.useSidebar)();
    return (<>
      <div className={(0, utils_1.cn)("h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full")} {...props}>
        <div className="flex justify-end z-20 w-full">
          <icons_react_1.IconMenu2 className="text-neutral-800 dark:text-neutral-200" onClick={() => setOpen(!open)}/>
        </div>
        <framer_motion_1.AnimatePresence>
          {open && (<framer_motion_1.motion.div initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-100%", opacity: 0 }} transition={{
                duration: 0.3,
                ease: "easeInOut",
            }} className={(0, utils_1.cn)("fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between", className)}>
              <div className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200" onClick={() => setOpen(!open)}>
                <icons_react_1.IconX />
              </div>
              {children}
            </framer_motion_1.motion.div>)}
        </framer_motion_1.AnimatePresence>
      </div>
    </>);
};
exports.MobileSidebar = MobileSidebar;
const SidebarLink = ({ link, className, ...props }) => {
    const { open, animate } = (0, exports.useSidebar)();
    return (<link_1.default href={link.href} className={(0, utils_1.cn)("flex items-center justify-start gap-2  group/sidebar py-2", className)} {...props}>
      {link.icon}

      <framer_motion_1.motion.span animate={{
            display: animate ? (open ? "inline-block" : "none") : "inline-block",
            opacity: animate ? (open ? 1 : 0) : 1,
        }} className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0">
        {link.label}
      </framer_motion_1.motion.span>
    </link_1.default>);
};
exports.SidebarLink = SidebarLink;
