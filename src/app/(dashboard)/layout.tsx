import Link from "next/link";
import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manipulate tickets and customers",
};

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <>
      <div className="w-full flex items-center gap-4 p-4 rounded-lg bg-neutral-800 text-lg font-semibold text-neutral-200">
        <Link href="/tickets">Tickets</Link>
        <Link href="/customers">Customers</Link>
      </div>
      {children}
    </>
  );
}
