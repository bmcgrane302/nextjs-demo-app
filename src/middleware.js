import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const protectedRoutes = ["/todo", "/slideshow"];

  if (protectedRoutes.some((p) => req.nextUrl.pathname.startsWith(p))) {
    const valid = token ? await verifyToken(token) : null;
    if (!valid) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/todo/:path*", "/slideshow/:path*"],
};
