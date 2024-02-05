"use client";
import CustomLoading from "@/containers/loading";
import { useQueryGetNote } from "@/hooks/useQueryGetNote";
import React from "react";

const Page = ({ params }: { params: { name: string } }) => {
  const { data, isLoading: isDetailNoteLoading } = useQueryGetNote(params.name);

  return (
    <CustomLoading isLoading={isDetailNoteLoading}>
      <div>{data?.data?.note?.rows[0]?.name}</div>
    </CustomLoading>
  );
};

export default Page;
