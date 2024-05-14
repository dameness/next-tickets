"use client";
import { Trash, File } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Modal from "./modal";
import api from "@/config/api";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export default function TicketsTableActions({ id }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const modal = (searchParams.get("modal") || "false") as string;

  async function handleDeleteTicket() {
    api
      .delete("/tickets", {
        params: { id },
      })
      .then(() => {
        alert("Ticket deleted!");
        router.refresh();
      })
      .catch((error) => {
        console.error(error);
        alert("Error deleting ticket!");
      });
  }

  return (
    <>
      <div className="flex gap-2 items-center justify-end">
        <button onClick={handleDeleteTicket}>
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
