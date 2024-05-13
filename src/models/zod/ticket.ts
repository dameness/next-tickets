import { z } from "zod";

export const TicketSchema = z.object({
  name: z.string().min(1, "Title required"),
  description: z.string().min(1, "Description required"),
  customer: z.string().min(1, "Select a customer"),
});

export type Ticket = z.infer<typeof TicketSchema>;
