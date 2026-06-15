import { NextRequest, NextResponse } from "next/server";
import { PUBLIC_ROUTES } from "./utils/constants/routes";

function isPublicRoute(pathname: string) {
  return PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const headers = new Headers(request.headers);

  headers.set("x-pathname", pathname);

  if (isPublicRoute(pathname)) {
    return NextResponse.next({
      request: {
        headers,
      },
    });
  }

  const accessToken = request.cookies.get("accessToken")?.value;
  console.log("Access Token:", accessToken);

  if (pathname.startsWith("/dashboard") && !accessToken) {
    const loginUrl = new URL("/auth/login", request.url);

    loginUrl.searchParams.set("next", pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next({
    request: {
      headers,
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
