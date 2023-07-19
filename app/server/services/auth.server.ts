import { createCookieSessionStorage } from "@remix-run/node";

import { z } from "zod";
import { Authenticator } from "arkyn_remix";

const user_schema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  verified: z.boolean(),
  createdAt: z.string(),
});

const sign_in_schema = z.object({
  token: z.string(),
  user: user_schema,
});

type User = z.infer<typeof sign_in_schema>;

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "remix:poker_scrm",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1B0ok"],
    secure: false,
  },
});

const authenticator = new Authenticator<User, User>(sessionStorage, (props) => {
  const url = new URL(props.request.url);
  const pathname = url.pathname;

  if (props.isSuccess === true) {
    if (props.user.user.verified === false) {
      props.redirect("/auth/verify-account");
    }

    const routesWithoutLogins = ["/auth/sign-in", "/auth/sign-up"];

    if (routesWithoutLogins.includes(pathname)) {
      props.redirect("/v1/secure/dashboard");
    }

    return props.user;
  }

  if (props.isSuccess === false) {
    if (!pathname.includes("/auth/sign-in")) {
      props.redirect(`/auth/sign-in?redirectURL=${pathname}`);
    }
  }

  return {} as any;
});

export { authenticator, sessionStorage, sign_in_schema };
export type { User };
