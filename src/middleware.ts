import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const protectedRoutes = ["/notes-client-component"];

  const currentUser = request.cookies.get("JWT")?.value;

  // if (!currentUser && protectedRoutes.includes(request.nextUrl.pathname)) {
  //   return NextResponse.redirect(
  //     new URL("/notes-client-component/login", request.url)
  //   );
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
