import { useLocation } from "@remix-run/react";

import { SignInForm, SignInHero, SignUpForm, SignUpHero } from "./components";
import { viewStyle } from "./styles";

export function View() {
  const { pathname } = useLocation();
  const location = pathname === "/auth/sign-in" ? "SIGN-IN" : "SIGN-UP";

  function ShowHero() {
    if (location === "SIGN-IN") return <SignInHero />;
    return <SignUpHero />;
  }

  function ShowForm() {
    if (location === "SIGN-IN") return <SignInForm />;
    return <SignUpForm />;
  }

  return (
    <main className={viewStyle}>
      <ShowHero />
      <ShowForm />
    </main>
  );
}
