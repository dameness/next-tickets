import Link from "next/link";
import Card from "@/components/customers/card";
import { Customer } from "@/models/zod/customer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export default async function Customers() {
  const session = await getServerSession(authOptions);

  const customers: Customer[] = await prisma.customer.findMany({
    where: { userId: session?.user.id },
  });

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between w-full mt-4 mb-8">
        <h1 className="sm:text-3xl text-2xl font-bold">Customers</h1>
        <Link
          href="/customers/new"
          className="py-2 px-6 bg-blue-500 text-neutral-50 rounded-md"
        >
          New customer
        </Link>
      </div>
      {customers.length === 0 ? (
        <h1 className="xs:text-left text-center xl:text-2xl sm:text-xl text-lg">
          You have no customers yet!
        </h1>
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-x-2 gap-y-4">
          {customers.map((customer) => (
            <Card
              key={customer.id}
              id={customer.id}
              name={customer.name}
              phone={customer.phone}
              email={customer.email}
            />
          ))}
        </div>
      )}
    </div>
  );
}
