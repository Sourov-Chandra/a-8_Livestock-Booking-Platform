import { betterFetch } from "@better-fetch/fetch";
import { NextResponse } from "next/server";

const privateRoutes = ["/animals/", "/my-profile", "/update-profile"];

const middleware = async(request) => {
  const pathname = request.nextUrl.pathname;

  const isPrivate = privateRoutes.some((route) => pathname.startsWith(route));

  if (!isPrivate) return NextResponse.next();

  const { data: session } = await betterFetch("/api/auth/get-session", {
    baseURL: request.nextUrl.origin,
    headers: {
      cookie: request.headers.get("cookie") || "",
    },
  });

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/animals/:path*", "/my-profile", "/update-profile"],
};


export default middleware