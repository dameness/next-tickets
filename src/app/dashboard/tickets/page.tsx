import TicketsTable from "@/components/tickets-table";
import Link from "next/link";

export default function Tickets() {
  return (
    <>
      <div className="w-[96%] flex items-center gap-4 p-4 rounded-lg bg-neutral-800 text-neutral-200">
        <Link href="#">Tickets</Link>
        <Link href="#">Customers</Link>
      </div>
      <div className="flex items-center justify-between w-[96%] mt-4 mb-8">
        <h1 className="sm:text-3xl text-2xl font-bold">Chamados</h1>
        <button className="py-2 px-6 bg-blue-500 text-neutral-50 rounded-md">
          Cadastrar
        </button>
      </div>
      <TicketsTable />
    </>
  );
}
