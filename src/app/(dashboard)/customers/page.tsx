import Link from "next/link";
import Card from "@/components/customers/card";
export default function Customers() {
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
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-x-2 gap-y-4">
        <Card
          name="Customer X"
          telephone="(xx)-99999-9999"
          email="mail@mail.com"
        />
        <Card
          name="Customer X"
          telephone="(xx)-99999-9999"
          email="mail@mail.com"
        />
        <Card
          name="Customer X"
          telephone="(xx)-99999-9999"
          email="mail@mail.com"
        />
        <Card
          name="Customer X"
          telephone="(xx)-99999-9999"
          email="mail@mail.com"
        />
      </div>
    </div>
  );
}
