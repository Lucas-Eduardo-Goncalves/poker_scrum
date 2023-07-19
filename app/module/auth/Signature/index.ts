// CLIENT
import { meta } from "./_meta";
import { View } from "./_view";

// SERVER
import { ActionController, LoaderController } from "./_controller";

export const SignatureClient = { View, meta };
export const SignatureServer = { ActionController, LoaderController };
