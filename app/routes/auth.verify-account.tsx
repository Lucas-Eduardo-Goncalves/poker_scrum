import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { VerifyAccountClient, VerifyAccountServer } from "~/module";

export const action: ActionFunction = async ({ request }) => {
  return await VerifyAccountServer.ActionController(request);
};

export const Loader: LoaderFunction = async ({ request }) => {
  return await VerifyAccountServer.LoaderController(request);
};

export const meta = VerifyAccountClient.meta;

export default function () {
  return <VerifyAccountClient.View />;
}
