import { Ticket } from "@prisma/client";
import Actions from "./actions";

interface Props {
  tickets: Ticket[]; // from prisma/client
}

export default function TicketsTable({ tickets }: Props) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="text-left">Customer</th>
          <th className="text-center">Date</th>
          <th className="text-center">Status</th>
          <th className="text-right">#</th>
        </tr>
      </thead>

      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket.id} className="border-b h-10">
            <td>{ticket.name}</td>
            <td className="text-center sm:table-cell hidden">
              {ticket.created_at?.toLocaleDateString("en-US")}
            </td>
            <td>
              <div className="mx-auto px-2 py-0.5 w-24 text-center rounded-lg bg-green-500">
                {ticket.status}
              </div>
            </td>
            <td>
              <Actions id={ticket.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
