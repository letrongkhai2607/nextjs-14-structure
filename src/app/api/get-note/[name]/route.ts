import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  let name = params.name;
  const note = await sql`SELECT * FROM Notes WHERE name=${name};`;

  return NextResponse.json({ note }, { status: 200 });
}
