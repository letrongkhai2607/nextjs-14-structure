import { Skeleton } from "@mui/material";
import React from "react";

const CustomSkeleton = () => {
  return (
    <Skeleton
      sx={{
        background: "whitesmoke",
        borderRadius: "0.25rem",
        opacity: 0.5,
      }}
      variant="rectangular"
      width={`100%`}
      height={150}
      animation="wave"
    />
  );
};

export default CustomSkeleton;
