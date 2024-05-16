import { signIn, signOut, useSession } from "next-auth/react";
import { LogOut, LoaderCircle, Settings2 } from "lucide-react";
import { FaGoogle } from "react-icons/fa6";
import GuestImage from "@/assets/guest.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Nav from "./nav";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="border-b-2 text-neutral-600 w-full flex items-center justify-center mb-4 py-2 px-4 h-16">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <Link
          className="font-extrabold text-sm cursor-pointer hover:tracking-wide transition-all "
          href="/"
        >
          <span className="text-blue-600 text-xl">NEXT</span> TICKETS
        </Link>
        <Nav session={session} />
      </div>
    </header>
  );
}
