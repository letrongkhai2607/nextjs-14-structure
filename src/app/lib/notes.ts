import { sql } from "@vercel/postgres";
export function DELAY(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export const fetchAllNotes = async () => {
  await DELAY(2000);
  const { rows } = await sql`SELECT * FROM Notes;`;
  return rows;
};
