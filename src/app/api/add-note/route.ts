import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { data } = await request.json();

  try {
    if (!data) throw new Error("Note name required");
    await sql`INSERT INTO Notes (Name) VALUES (${data.name});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const notes = await sql`SELECT * FROM Notes;`;
  return NextResponse.json({ notes }, { status: 200 });
}
