export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/users/:path*",
    "/projects/:path*",
    "/tickets/:path*",
    "/dashboard/:path*",
  ],
};
