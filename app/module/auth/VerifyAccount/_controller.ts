import { verify } from "./functions";

export async function ActionController(request: Request) {
  const formData = Object.fromEntries(await request.formData());

  switch (formData._action) {
    case "verifyAccount":
      return await verify({ formData });
    default:
      return null;
  }
}

export async function LoaderController(request: Request) {
  return null;
}
