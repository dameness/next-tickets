"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { User, LogOut, LoaderCircle } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const { status, data } = useSession();

  async function handleLogin() {
    await signIn();
  }

  async function handleLogout() {
    await signOut();
  }

  return (
    <header className=" bg-neutral-700 text-neutral-200 w-full mb-4 flex justify-between items-center py-2 px-4 h-16">
      <Link className="font-extrabold text-sm cursor-pointer" href="/dashboard">
        <span className="text-blue-600 text-xl">NEXT</span> TICKETS
      </Link>

      <nav className="flex items-center gap-2">
        {status === "loading" ? (
          <LoaderCircle className="animate-spin transition" />
        ) : status === "authenticated" ? (
          <>
            <Link href="/dashboard">
              <User />
            </Link>
            <button onClick={handleLogout}>
              <LogOut />
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-600 px-4 py-2 rounded-lg text-neutral-200"
          >
            Log in
          </button>
        )}
      </nav>
    </header>
  );
}
