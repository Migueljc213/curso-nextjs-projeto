import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("session_token")?.value;

  const signInUrl = new URL("/login", request.url);
  const dashboardURL = new URL("/dashboard", request.url);

  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");
  const isLoginRoute = request.nextUrl.pathname === "/login";

  if (isDashboard && !token) {
    return NextResponse.redirect(signInUrl);
  }
  if (isLoginRoute && token) {
    return NextResponse.redirect(dashboardURL);
  }

  return NextResponse.next();
}
//Config para o middleware não rodar em arquivos estáticos
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
