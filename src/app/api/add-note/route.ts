import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  try {
    if (!name) throw new Error("Note name required");
    await sql`INSERT INTO Notes (Name) VALUES (${name});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const notes = await sql`SELECT * FROM Notes;`;
  return NextResponse.json({ notes }, { status: 200 });
}

export async function DELETE(request: Request) {}
