import authConfig from "./auth.config";
import NextAuth from "next-auth";

export const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = Boolean(req.auth);
  console.log("ROUTE: ", req.nextUrl.pathname);
  console.log("isLoggedIn: ", isLoggedIn);
});

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
