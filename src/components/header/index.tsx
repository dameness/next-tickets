import { User, LogOut } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-neutral-700 text-neutral-200 w-full mb-4 flex justify-between items-center py-2 px-4 h-16">
      <h1 className="font-extrabold text-sm">
        <span className="text-blue-600 text-xl">NEXT</span> TICKETS
      </h1>
      <nav className="flex items-center gap-2">
        <Link href="#">
          <User />
        </Link>
        <Link href="#">
          <LogOut />
        </Link>
      </nav>
    </div>
  );
}
