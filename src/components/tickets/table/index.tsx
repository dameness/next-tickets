import { Customer, Prisma, Ticket } from "@prisma/client";
import Actions from "./actions";

type TicketWithCustomer = Prisma.TicketGetPayload<{
  include: {
    customer: true;
  };
}>;

interface Props {
  tickets: TicketWithCustomer[]; // from prisma/client
}

export default function TicketsTable({ tickets }: Props) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="text-center">Customer</th>
          <th className="text-center sm:table-cell hidden">Date Modified</th>
          <th className="text-center">Status</th>
          <th className="text-right xs:pr-10 pr-[30px]">#</th>
        </tr>
      </thead>

      <tbody>
        {tickets.map((ticket, index) => (
          <tr key={ticket.id} className="border-b h-10">
            <td className="text-center">{ticket.customer?.name}</td>
            <td className="text-center sm:table-cell hidden">
              {ticket.updated_at?.toLocaleDateString("en-US")}
            </td>
            <td>
              <div
                className={`mx-auto px-2 py-0.5 sm:w-24 xs:w-20 w-16  sm:text-base xs:text-sm text-xs text-center rounded-lg ${
                  ticket.status === "OPEN" ? "bg-green-500" : "bg-amber-400"
                }`}
              >
                {ticket.status}
              </div>
            </td>
            <td>
              <Actions index={index} ticket={ticket} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
