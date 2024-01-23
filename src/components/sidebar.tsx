"use client";
import { SIDE_BARS } from "@/constants";
import { Typography, Stack } from "@mui/material";
import Link from "next/link";

import React from "react";

const Sidebar = () => {
  const renderSidebar = () => {
    return SIDE_BARS.map((sidebar) => {
      return (
        <Link href={`${sidebar.url}`}>
          <Stack
            key={sidebar.label}
            flexDirection={`row`}
            gap={2}
            alignItems={`center`}
            sx={{
              cursor: "pointer",
              padding: "16px",
            }}
          >
            {sidebar.icon}
            <Typography>{sidebar.label}</Typography>
          </Stack>
        </Link>
      );
    });
  };
  return <div>{renderSidebar()}</div>;
};

export default Sidebar;
