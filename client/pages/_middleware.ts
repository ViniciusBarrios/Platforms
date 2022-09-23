// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// import { decodeToken } from "@services/auth";

// const privateRouters = ["/logout"];
// const privateRoutesWhenLogged = ["/signin", "/signup"];

// export const middleware = async (req: NextRequest) => {
//   const redirectURL = (path: string) => new URL(path, req.url);

//   const pageName = req.page.name;

//   const { "animalbft.token": token } = req.cookies;

//   if (privateRouters.find(router => router === pageName)) {
//     if (!token) return NextResponse.redirect(redirectURL("/signin"));

//     const { error } = await decodeToken(token);

//     if (error) NextResponse.redirect(redirectURL("/signin"));
//   } else if (privateRoutesWhenLogged.find(router => router === pageName)) {
//     const { error } = await decodeToken(token);

//     if (!error) return NextResponse.redirect(redirectURL("/"));
//   }

//   return NextResponse.next();
// };

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  return NextResponse.next();
};
