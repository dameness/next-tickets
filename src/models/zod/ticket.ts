import { z } from "zod";

export const TicketSchema = z.object({
  name: z.string().min(1, { message: "Title required" }),
  description: z.string().min(1, { message: "Description required" }),
  customerId: z.string().min(1, { message: "Select a customer" }),
});

export type Ticket = z.infer<typeof TicketSchema>;
