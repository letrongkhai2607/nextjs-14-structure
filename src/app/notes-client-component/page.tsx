"use client";

import CustomSkeleton from "@/components/custom-skeleton";
import SimpleSnackbar from "@/components/nackbar";
import NoteItem from "@/components/note-item";
import CustomLoading from "@/containers/loading";
import { useMutationAddNote } from "@/hooks/useMutationAddNote";
import { useQueryNotes } from "@/hooks/useQueryNotes";
import { SendTwoTone } from "@mui/icons-material";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Page = () => {
  const { data, isLoading } = useQueryNotes();

  const renderSkeleton = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8].map((element) => (
      <Grid item xs={6} md={3}>
        <CustomSkeleton />
      </Grid>
    ));
  };
  return (
    <CustomLoading isLoading={false}>
      <div>
        <Link href="/notes-client-component/new">New</Link>
        <Grid my={2} container spacing={2}>
          {isLoading ? (
            <>{renderSkeleton()}</>
          ) : (
            data?.data.notes.rows.map(
              (note: { name: string }, index: number) => (
                <Grid item xs={6} md={3}>
                  <NoteItem note={note} />
                </Grid>
              )
            )
          )}
        </Grid>
      </div>
    </CustomLoading>
  );
};

export default Page;
