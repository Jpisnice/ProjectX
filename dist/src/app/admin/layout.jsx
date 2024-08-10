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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const adminSidebar_1 = require("@/components/admin-components/adminSidebar");
const adminSidebarMobile_1 = require("@/components/admin-components/adminSidebarMobile");
const AdminLayout = ({ children }) => {
    const [isDesktop, setIsDesktop] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        // Check the screen size after the component mounts
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        handleResize(); // Set initial value
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (<div className="flex h-screen">
      {isDesktop ? <adminSidebar_1.AdminSidebar /> : <adminSidebarMobile_1.AdminSidebarMobile />}
      <div className="flex-1 p-4 rounded-[15px] bg-primary rounded-r-none text-primary-foreground">
        {children}
      </div>
    </div>);
};
exports.default = AdminLayout;
