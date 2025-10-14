import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

const DEMO_USER = { email: "test@example.com", password: "1234" };

export async function POST(req) {
  const { email, password } = await req.json();

  if (email !== DEMO_USER.email || password !== DEMO_USER.password) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken({ email });

  const res = NextResponse.redirect(new URL("/todo", req.url), 303);
  res.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" ? true : false,
    sameSite: "lax",
    path: "/",
  });

  console.info("✅ Token cookie set:", res.cookies.get("token"));
  return res;
}
