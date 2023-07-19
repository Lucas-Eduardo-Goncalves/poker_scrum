// CLIENT
import { meta } from "./_meta";
import { View } from "./_view";

// SERVER
import { ActionController, LoaderController } from "./_controller";

export const VerifyAccountClient = { View, meta };
export const VerifyAccountServer = { ActionController, LoaderController };
