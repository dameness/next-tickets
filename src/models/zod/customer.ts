import { z } from "zod";

export const CustomerSchema = z.object({
  name: z.string().min(1, "Name required"),
  phone: z.string().min(1, "Phone required"),
  email: z.string().min(1, "E-mail required").email("Enter a valid e-mail"),
});

export type Customer = z.infer<typeof CustomerSchema>;
