import React from "react";
import { fetchAllNotes } from "../app/lib";

const Notes = async (): Promise<JSX.Element> => {
  const rows = await fetchAllNotes();
  return (
    <div>
      {rows.map((note, index: number) => (
        <div key={index}>{note.name}</div>
      ))}
    </div>
  );
};

export default Notes;
