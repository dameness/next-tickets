import RefreshButton from "@/components/tickets/refresh";
import TicketsTable from "@/components/tickets/table";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Tickets() {
  const session = await getServerSession(authOptions);

  const tickets = await prisma.ticket.findMany({
    where: {
      customer: {
        userId: session?.user.id,
      },
    },
    include: {
      customer: true,
    },
    orderBy: {
      updated_at: "desc",
    },
  });

  return (
    <>
      <div className="flex items-center justify-between w-full mt-4 mb-8">
        <h1 className="sm:text-3xl text-2xl font-bold">Tickets</h1>
        <div className="flex items-center justify-center gap-2">
          <RefreshButton />
          <Link
            href="/tickets/new"
            className="py-2 px-6 xs:font-normal font-semibold bg-blue-500 text-neutral-50 rounded-md"
          >
            Open ticket
          </Link>
        </div>
      </div>
      {tickets.length === 0 ? (
        <>
          <h1 className="text-xl mt-5">You don't have any ticket.</h1>
          <Link className="text-sm text-blue-400" href="/tickets/new">
            Create a ticket
          </Link>
        </>
      ) : (
        <TicketsTable tickets={tickets} />
      )}
    </>
  );
}
