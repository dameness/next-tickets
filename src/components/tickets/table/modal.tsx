"use client";
import Link from "next/link";
import { Prisma } from "@prisma/client";
import { X } from "lucide-react";

type TicketWithCustomer = Prisma.TicketGetPayload<{
  include: {
    customer: true;
  };
}>;

interface Props {
  ticket: TicketWithCustomer;
  index: number;
}

export default function TicketsTableModal({ ticket, index }: Props) {
  return (
    <div className="xs:w-2/3 w-11/12 max-w-md max-h-[96vh] overflow-y-auto p-4 rounded-lg bg-white shadow 2xl drop-shadow-2xl absolute left-1/2 top-1/2 border translate-x-[-50%] translate-y-[-50%] flex flex-col gap-2">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Ticket details</h1>
        <Link
          href={`?modal-${index}=false`}
          className="px-1 py-1  flex items-center text-red-500 rounded-full "
        >
          <X />
        </Link>
      </div>
      <h1>
        <span className="font-semibold">Title: </span> {ticket.name}
      </h1>
      <h1 className="font-semibold -mb-1">Description:</h1>
      <p className="break-words">{ticket.description}</p>
      <hr />
      <h1 className="text-xl font-semibold">Customer details</h1>
      <h1>
        <span className="font-semibold">Name: </span> {ticket.customer?.name}
      </h1>
      <h1>
        <span className="font-semibold">Telephone: </span>{" "}
        {ticket.customer?.phone}
      </h1>
      <h1>
        <span className="font-semibold">E-mail: </span> {ticket.customer?.email}
      </h1>
    </div>
  );
}
