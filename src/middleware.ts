import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("currentUser")?.value;

  // Ensure the middleware doesn't redirect if the user is on the authentication page
  if (!currentUser && request.nextUrl.pathname !== "/auth") {
    // Redirect to authentication if not logged in
    const url = request.nextUrl.clone();
    url.pathname = "/auth";
    return NextResponse.redirect(url);
  }

  // Prevent redirect loop by allowing requests to continue if already on the "/authentication" page
  if (currentUser || request.nextUrl.pathname === "/auth") {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
