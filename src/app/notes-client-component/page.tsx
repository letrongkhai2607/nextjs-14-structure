"use client";

import SimpleSnackbar from "@/components/nackbar";
import CustomLoading from "@/containers/loading";
import { useMutationAddNote } from "@/hooks/useMutationAddNote";
import { useQueryNotes } from "@/hooks/useQueryNotes";
import { SendTwoTone } from "@mui/icons-material";
import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const Page = () => {
  const { data, isLoading } = useQueryNotes();
  const [note, setNote] = React.useState("");

  return (
    <CustomLoading isLoading={isLoading}>
      <div>
        <Stack
          flexDirection={`row`}
          gap={`2rem`}
          justifyContent={`space-between`}
          alignItems={`center`}
          sx={{
            background: "white",
            borderRadius: "0.25rem",
            padding: "0.5rem",
            mb: "1rem",
            color: "black",
          }}
        >
          <Typography>Client Component with RTK</Typography>
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

        {data?.data.notes.rows.map((note: { name: string }, index: number) => (
          <div key={index}>{note.name}</div>
        ))}
      </div>
    </CustomLoading>
  );
};

export default Page;
