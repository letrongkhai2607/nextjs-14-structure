"use client";
import SimpleSnackbar from "@/components/nackbar";
import { Stack, TextField } from "@mui/material";
import React from "react";

const Page = () => {
  const [note, setNote] = React.useState("");

  return (
    <div>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        gap={`2rem`}
        justifyContent={`space-between`}
        alignItems={`center`}
        sx={{
          background: "whitesmoke",
          borderRadius: "0.25rem",
          mb: "1rem",
          color: "black",
          padding: "1rem 1rem",
        }}
      >
        <TextField
          size="small"
          defaultValue={note}
          placeholder="Enter note name..."
          onBlur={(event) => setNote(event.target.value)}
          sx={{
            flex: 1,
          }}
        />
        <SimpleSnackbar note={note} setNote={setNote} />
      </Stack>
    </div>
  );
};

export default Page;
