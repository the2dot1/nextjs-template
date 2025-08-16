import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  
  /** Uncomment this block when config auth db is ready
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  */

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
