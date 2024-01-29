import { Box } from "@mui/material";
import React from "react";

const NoteItem = ({ note }: { note: { name: string } }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "whitesmoke",
        borderRadius: "0.25rem",
        color: "black",
      }}
      height={`150px`}
    >
      {note.name}
    </Box>
  );
};

export default NoteItem;
