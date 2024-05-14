import Link from "next/link";
import { Customer } from "@/models/zod/customer";
import prisma from "@/lib/prisma";
import TicketForm from "@/components/tickets/form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function NewTicket() {
  const session = await getServerSession(authOptions);

  const customers: Customer[] = await prisma.customer.findMany({
    where: { userId: session?.user.id },
  });

  if (customers.length === 0) {
    return (
      <>
        <h1 className="text-xl mt-5">You don't have any customer.</h1>
        <Link className="text-sm text-blue-400" href="/customers/new">
          Create a customer
        </Link>
      </>
    );
  } else {
    return <TicketForm userId={session?.user.id} customers={customers} />;
  }
}
