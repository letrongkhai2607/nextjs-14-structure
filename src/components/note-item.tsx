import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const NoteItem = ({ note }: { note: { name: string } }) => {
  return (
    <Link href={`/notes-client-component/${note.name}`}>
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
    </Link>
  );
};

export default NoteItem;
