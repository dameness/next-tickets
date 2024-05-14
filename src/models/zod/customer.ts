import { z } from "zod";

export const CustomerSchema = z.object({
  id: z.optional(z.string()),
  name: z.string().min(1, "Name required"),
  phone: z
    .string()
    .min(1, "Phone required")
    .refine(
      (input) =>
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(
          input
        ),
      "Enter a valid phone number"
    ),
  email: z.string().min(1, "E-mail required").email("Enter a valid e-mail"),
});

export type Customer = z.infer<typeof CustomerSchema>;
