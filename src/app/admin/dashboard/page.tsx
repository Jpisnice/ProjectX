"use client";
import React from "react";

const Dashboard = () => {
  return (
    <div className="m-3 flex items-start justify-center gap-5 flex-wrap">
      <div className="bg-white p-12 h-fit w-fit flex flex-col justify-normal">
        <h1>Heading</h1>
        <div className="bg-slate-600 p-2 h-10 w-10 self-center"></div>
      </div>
      <div className="bg-white p-12 h-fit w-fit flex flex-col justify-normal">
        <h1>Heading</h1>
        <div className="bg-slate-600 p-2 h-10 w-10 self-center"></div>
      </div>
      <div className="bg-white p-12 h-fit w-[150px] flex flex-col justify-normal">
        <h1>Heading</h1>
        <div className="bg-slate-600 p-2 h-10 w-10 self-center"></div>
      </div>
    </div>
  );
};

export default Dashboard;
