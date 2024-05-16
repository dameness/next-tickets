"use client";

import { LogOut, LoaderCircle, Settings2, ExternalLink } from "lucide-react";
import { FaGoogle } from "react-icons/fa6";
import GuestImage from "@/assets/guest.png";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Props {
  session: Session | null;
}

export default function Nav({ session }: Props) {
  const router = useRouter();

  async function handleLogin() {
    await signIn("google");
  }

  async function handleLogout() {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    router.push(data.url, { scroll: false });
    router.refresh();
  }

  return (
    <nav className="flex items-center gap-2">
      {session === null ? (
        <button
          onClick={handleLogin}
          className="flex gap-1.5 items-center bg-blue-600 px-4 py-2 rounded-lg text-neutral-200 hover:opacity-90 transition-all"
        >
          <FaGoogle />
          Sign in
        </button>
      ) : (
        <>
          <Link href="#">
            <Image
              src={session.user.image || GuestImage}
              alt="user"
              className="rounded-full"
              width={36}
              height={36}
            />
          </Link>

          <Link href="/open" className="hover:text-neutral-500">
            <ExternalLink />
          </Link>

          <Link href="/tickets" className="hover:text-neutral-500">
            <Settings2 />
          </Link>
          <button className="hover:text-red-500/50" onClick={handleLogout}>
            <LogOut />
          </button>
        </>
      )}
    </nav>
  );
}
