import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
const MAX_AGE = 60 * 60 * 24 * 30; // days;
const SECRET = "SECRET";
export const COOKIE_NAME = "JWT";
export async function POST(request: Request) {
  // Should get data in request and find in database
  const body = await request.json();
  const { phone, password } = body.data;

  if (phone !== "0907942969" || password !== "0907942969") {
    return NextResponse.json({
      status: 401,
      message: "Unauthorized",
    });
  }
  // Should get data in request and find in database
  const accessToken = sign(
    {
      phone,
    },
    SECRET,
    {
      expiresIn: MAX_AGE,
    }
  );

  const seralized = serialize(COOKIE_NAME, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/",
  });

  const response = {
    status: 200,
    message: "Authenticated!",
  };

  return new Response(JSON.stringify(response), {
    headers: { "Set-Cookie": seralized },
  });
}
