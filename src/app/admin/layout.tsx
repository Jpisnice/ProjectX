"use client";
import React, { useState, useEffect } from "react";
import { AdminSidebar } from "@/components/admin-components/adminSidebar";
import { AdminSidebarMobile } from "@/components/admin-components/adminSidebarMobile";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
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

  return (
    <div className="flex h-screen">
      {isDesktop ? <AdminSidebar /> : <AdminSidebarMobile />}
      <div className="flex-1 p-4 rounded-[15px] bg-primary rounded-r-none text-primary-foreground">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
