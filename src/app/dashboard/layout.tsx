import Link from "next/link";
import { ReactNode } from "react";
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-full flex items-center gap-4 p-4 rounded-lg bg-neutral-800 text-neutral-200">
        <Link href="/dashboard/tickets">Tickets</Link>
        <Link href="/dashboard/customers">Customers</Link>
      </div>
      {children}
    </>
  );
}
