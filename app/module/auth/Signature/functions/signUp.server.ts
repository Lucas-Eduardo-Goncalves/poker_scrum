import { json } from "@remix-run/node";
import { api, formControl } from "arkyn_remix";
import { schema } from "../_schema";

type SignInProps = {
  formData: { [x: string]: any };
};

export async function signUp({ formData }: SignInProps) {
  const controlData = await formControl({ schema: schema.signUp, formData });
  if (!controlData.success) return json(controlData, 400);

  const { data } = await api.POST({
    url: "/create-account",
    data: controlData.data,
  });

  return null;
}
