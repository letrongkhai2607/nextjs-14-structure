import { sql } from "@vercel/postgres";
import React from "react";
import { fetchAllNotes } from "../lib";

const Page = async ({
  params,
}: {
  params: { user: string };
}): Promise<JSX.Element> => {
  const { rows } = await sql`SELECT * FROM Notes;`;
  return (
    <div>
      {rows.map((note) => (
        <div>{note.name}</div>
      ))}
    </div>
  );
};

export default Page;
