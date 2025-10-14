import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

const DEMO_USER = { email: "test@example.com", password: "1234" };

export async function POST(req) {
  const { email, password } = await req.json();

  if (email !== DEMO_USER.email || password !== DEMO_USER.password) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken({ email });

  // redirect after successful login
  const res = NextResponse.redirect(new URL("/", req.url), 303);

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  res.cookies.set("logged_in", "true", {
    httpOnly: false,
    sameSite: "lax",
    path: "/",
  });

  return res;
}
