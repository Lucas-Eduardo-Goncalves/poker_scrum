import { z } from "zod";

const verify = z.object({
  code: z
    .string()
    .min(1, "Field is required")
    .min(6, "Must contain 6 characters")
    .max(6, "Must contain 6 characters"),
});

export const schema = { verify };
