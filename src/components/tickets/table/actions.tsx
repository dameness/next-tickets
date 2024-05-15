"use client";
import { Trash, File, CheckCheck, ArrowBigUpDash } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Modal from "./modal";
import api from "@/config/api";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  status: string;
}

export default function TicketsTableActions({ id, status }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const modal = (searchParams.get("modal") || "false") as string;

  async function handleStatusChange() {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    api
      .put("/tickets", { status: newStatus }, { params: { id } })
      .then(() => {
        alert("Ticket updated!");
        router.refresh();
      })
      .catch((error) => {
        console.error(error);
        alert(
          `Error updating ticket! ${
            error instanceof Error && ` - ${error.message}`
          }`
        );
      });
  }
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
        alert(
          `Error deleting ticket! ${
            error instanceof Error && ` - ${error.message}`
          }`
        );
      });
  }

  return (
    <>
      <div className="flex gap-2 items-center justify-end">
        <button onClick={handleStatusChange}>
          {status === "OPEN" ? (
            <CheckCheck className="text-green-400" />
          ) : (
            <ArrowBigUpDash className="text-amber-400" />
          )}
        </button>
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
