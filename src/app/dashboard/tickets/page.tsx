import TicketsTable from "@/components/tickets-table";
import Link from "next/link";

export default function Tickets() {
  return (
    <>
      <div className="flex items-center justify-between w-[96%] mt-4 mb-8">
        <h1 className="sm:text-3xl text-2xl font-bold">Tickets</h1>
        <Link
          href="/dashboard/tickets/new"
          className="py-2 px-6 bg-blue-500 text-neutral-50 rounded-md"
        >
          Open ticket
        </Link>
      </div>
      <TicketsTable />
    </>
  );
}
