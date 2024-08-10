"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const UserDash = () => {
    const router = (0, navigation_1.useRouter)();
    const pathname = (0, navigation_1.usePathname)();
    (0, react_1.useEffect)(() => {
        if (pathname === "/user") {
            router.push("/user/home");
        }
    }, [pathname, router]);
    return null;
};
exports.default = UserDash;
