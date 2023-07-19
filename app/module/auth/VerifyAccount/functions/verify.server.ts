import { json } from "@remix-run/node";
import { api, formControl } from "arkyn_remix";
import { schema } from "../_schema";

type VerifyProps = {
  formData: { [x: string]: any };
};

export async function verify({ formData }: VerifyProps) {
  const controlData = await formControl({ schema: schema.verify, formData });
  if (!controlData.success) return json(controlData, 400);

  const { data } = await api.POST({
    url: "/verify-account",
    data: controlData.data,
  });

  return null;
}
