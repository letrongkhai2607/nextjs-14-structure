import { Container, Box } from "@mui/material";
import React, { ReactElement } from "react";

const PhotoContainer = ({ children }: { children: ReactElement }) => {
  return <Container>{children}</Container>;
};

export default PhotoContainer;
