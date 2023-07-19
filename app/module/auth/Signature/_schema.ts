import { z } from "zod";

const signIn = z.object({
  email: z.string().min(1, "Email is required").email("It must be an email"),
  password: z.string().min(1, "Password is required"),
});

const signUp = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("It must be an email"),
    password: z.string().min(6, "Minimum 6 character password"),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords must be the same",
  });

export const schema = { signIn, signUp };
