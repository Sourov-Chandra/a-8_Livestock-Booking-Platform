import { betterFetch } from "@better-fetch/fetch";
import { NextResponse } from "next/server";

export default async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/animals") {
    return NextResponse.next();
  }

  const { data: session, error } = await betterFetch("/api/auth/get-session", {
    baseURL: request.nextUrl.origin,
    headers: {
      cookie: request.headers.get("cookie") || "",
    },
  });

  if (!session || error) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", encodeURI(request.url));
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my-profile", "/update-profile", "/animals/:path*"],
};