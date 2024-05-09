import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Name required" }),
  phone: z.string().min(1, { message: "Phone required" }),
  email: z.string().min(1, { message: "E-mail required" }),
});

export type Customer = z.infer<typeof schema>;
