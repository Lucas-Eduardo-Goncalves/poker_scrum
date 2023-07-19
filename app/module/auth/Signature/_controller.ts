import { authenticator, sign_in_schema } from "~/server/services";

import { signUp } from "./functions";
import { schema } from "./_schema";

export async function ActionController(request: Request) {
  const formData = Object.fromEntries(await request.formData());

  switch (formData._action) {
    case "sign-in":
      return await authenticator.authenticate(request, {
        formData,
        redirectTo: "/dashboard",
        url: "/login",
        formSchema: schema.signIn,
        responseSchema: sign_in_schema,
      });
    case "signup":
      return await signUp({ formData });
    default:
      return null;
  }
}

export async function LoaderController(request: Request) {
  return null;
}
