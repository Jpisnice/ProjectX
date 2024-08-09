"use client";
import React from "react";
import { AdminSidebar } from "@/components/adminSidebar";
import { AdminSidebarMobile } from "@/components/adminSidebarMobile";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  // Custom hook to detect screen size
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <div className="flex h-screen">
      {isDesktop ? <AdminSidebar /> : <AdminSidebarMobile />}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default AdminLayout;
