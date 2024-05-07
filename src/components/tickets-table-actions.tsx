"use client";
import { Trash, File } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Modal from "./tickets-modal";

export default function TicketsTableActions() {
  const searchParams = useSearchParams();
  const modal = (searchParams.get("modal") || "false") as string;
  return (
    <>
      <div className="flex gap-2 items-center justify-end">
        <button>
          <Trash className="text-red-400" />
        </button>
        <Link href={`?modal=${modal === "true" ? "false" : "true"}`}>
          <File className="text-blue-600" />
        </Link>
      </div>
      {modal === "true" && <Modal />}
    </>
  );
}
