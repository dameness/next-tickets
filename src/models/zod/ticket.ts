import { z } from "zod";

export const TicketSchema = z.object({
  id: z.optional(z.string()),
  status: z.optional(z.string()),
  name: z.string().min(1, "Title required"),
  description: z.string().min(1, "Description required"),
  customerId: z.string().min(1, "Select a customer"),
});

export type Ticket = z.infer<typeof TicketSchema>;
