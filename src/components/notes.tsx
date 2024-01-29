import React from "react";
import { fetchAllNotes } from "../app/lib";

const Notes = async (): Promise<JSX.Element> => {
  const rows = await fetchAllNotes();
  return <pre>{JSON.stringify(rows, null, 4)}</pre>;
};

export default Notes;
