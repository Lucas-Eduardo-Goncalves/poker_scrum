import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { SignatureClient, SignatureServer } from "~/module";

export const action: ActionFunction = async ({ request }) => {
  return await SignatureServer.ActionController(request);
};

export const Loader: LoaderFunction = async ({ request }) => {
  return await SignatureServer.LoaderController(request);
};

export const meta = SignatureClient.meta;

export default function () {
  return <SignatureClient.View />;
}
