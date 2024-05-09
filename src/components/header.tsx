"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { LogOut, LoaderCircle, Settings2 } from "lucide-react";
import GuestImage from "@/assets/guest.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const { status, data } = useSession();
  const router = useRouter();
  async function handleLogin() {
    await signIn();
  }

  async function handleLogout() {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    router.push(data.url, { scroll: false });
  }

  return (
    <header className=" bg-neutral-700 text-neutral-200 w-full mb-4 flex justify-between items-center py-2 px-4 h-16">
      <Link className="font-extrabold text-sm cursor-pointer" href="/">
        <span className="text-blue-600 text-xl">NEXT</span> TICKETS
      </Link>

      <nav className="flex items-center gap-2">
        {status === "loading" ? (
          <LoaderCircle className="animate-spin transition" />
        ) : status === "authenticated" ? (
          <>
            {data.user.image && (
              <Link href="#">
                <Image
                  src={data.user.image || GuestImage}
                  alt="user"
                  className="rounded-full border-2 border-red"
                  width={36}
                  height={36}
                />
              </Link>
            )}
            <Link href="/tickets">
              <Settings2 />
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
