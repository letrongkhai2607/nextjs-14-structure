import React, { ReactNode } from "react";

const CustomLoading = ({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: ReactNode;
}) => {
  if (isLoading) {
    return <div>Loading</div>;
  }
  return <div>{children}</div>;
};

export default CustomLoading;
