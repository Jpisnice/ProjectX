"use client";
import React from "react";
import IssueCard from "@/components/admin-components/IssueCard";

const ProfilePage = () => {
  const issues = [
    {
      id: 1,
      title: "Issue 1",
      description: "This is the first issue",
      ward: "Ward 1",
      location: "Location 1",
      isResolved: true,
    },
    {
      id: 2,
      title: "Issue 2",
      description: "This is the second issue",
      ward: "Ward 2",
      location: "Location 2",
      isResolved: false,
    },
    {
      id: 3,
      title: "Issue 1",
      description: "This is the first issue",
      ward: "Ward 1",
      location: "Location 1",
      isResolved: true,
    },
    {
      id: 86,
      title: "Issue 2",
      description: "This is the second issue",
      ward: "Ward 2",
      location: "Location 2",
      isResolved: false,
    },
    {
      id: 88,
      title: "Issue 1",
      description: "This is the first issue",
      ward: "Ward 1",
      location: "Location 1",
      isResolved: true,
    },
    {
      id: 34,
      title: "Issue 2",
      description: "This is the second issue",
      ward: "Ward 2",
      location: "Location 2",
      isResolved: false,
    },
    {
      id: 33,
      title: "Issue 1",
      description: "This is the first issue",
      ward: "Ward 1",
      location: "Location 1",
      isResolved: true,
    },
    {
      id: 16,
      title: "Issue 2",
      description: "This is the second issue",
      ward: "Ward 2",
      location: "Location 2",
      isResolved: false,
    },
    {
      id: 58,
      title: "Issue 1",
      description: "This is the first issue",
      ward: "Ward 1",
      location: "Location 1",
      isResolved: true,
    },
    {
      id: 54,
      title: "Issue 2",
      description: "This is the second issue",
      ward: "Ward 2",
      location: "Location 2",
      isResolved: false,
    },
    {
      id: 53,
      title: "Issue 1",
      description: "This is the first issue",
      ward: "Ward 1",
      location: "Location 1",
      isResolved: true,
    },
    {
      id: 26,
      title: "Issue 2",
      description: "This is the second issue",
      ward: "Ward 2",
      location: "Location 2",
      isResolved: false,
    },
    {
      id: 28,
      title: "Issue 1",
      description: "This is the first issue",
      ward: "Ward 1",
      location: "Location 1",
      isResolved: true,
    },
    {
      id: 22,
      title: "Issue 2",
      description: "This is the second issue",
      ward: "Ward 2",
      location: "Location 2",
      isResolved: false,
    },
    // Add more issues as needed
  ];

  const handleClick = (issue_id: number) => {
    console.log(`Issue with ID ${issue_id} clicked`);
    // Handle the click event for the specific issue here
  };

  return (
    <div className="w-full h-full">
      <div className="font-bold text-2xl mb-4">Issues</div>
      <h1 className="mb-4">Here are the issues</h1>
      <div
        className="flex flex-wrap overflow-y-auto mt-4 w-fit justify-center max-h-[calc(100vh-10rem)]"
        // This sets the max-height of the container to be less than the viewport height,
        // allowing for vertical scrolling
      >
        {issues.map((issue) => (
          <div
            key={issue.id}
            onClick={() => handleClick(issue.id)}
            className="w-full md:w-1/2 p-2"
          >
            <IssueCard
              title={issue.title}
              description={issue.description}
              ward={issue.ward}
              location={issue.location}
              isResolved={issue.isResolved}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
