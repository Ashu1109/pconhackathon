import { NextResponse } from "next/server";
export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublic = path == "/login" || path == "/signup";
  const token = request.cookies.get("token")?.value || "";
  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  if (token && isPublic) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/",
    "/notes/:path*",
    "/newnote",
    "/dashboard",
    "/login",
    "/signup",
  ],
};
