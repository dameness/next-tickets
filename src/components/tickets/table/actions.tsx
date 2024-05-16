"use client";
import { Trash, File, CheckCheck, ArrowBigUpDash } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Modal from "./modal";
import api from "@/config/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { Prisma } from "@prisma/client";

type TicketWithCustomer = Prisma.TicketGetPayload<{
  include: {
    customer: true;
  };
}>;

interface Props {
  ticket: TicketWithCustomer;
  index: number;
}

export default function TicketsTableActions({ ticket, index }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const modal = (searchParams.get(`modal-${index}`) || "false") as string;

  async function handleStatusChange() {
    const newStatus = ticket.status === "OPEN" ? "CLOSED" : "OPEN";
    api
      .put("/tickets", { status: newStatus }, { params: { id: ticket.id } })
      .then(() => {
        toast("Ticket updated!");
        router.refresh();
      })
      .catch((error) => {
        console.error(error);
        toast(
          `Error updating ticket! ${
            error instanceof AxiosError && ` - ${error.message}`
          }`
        );
      });
  }
  async function handleDeleteTicket() {
    api
      .delete("/tickets", {
        params: { id: ticket.id },
      })
      .then(() => {
        toast("Ticket deleted!");
        router.refresh();
      })
      .catch((error) => {
        console.error(error);
        toast(
          `Error deleting ticket! ${
            error instanceof AxiosError && ` - ${error.message}`
          }`
        );
      });
  }

  return (
    <>
      <div className="flex gap-2 items-center justify-end">
        <button onClick={handleStatusChange}>
          {ticket.status === "OPEN" ? (
            <CheckCheck className="text-green-400 xs:w-6 w-[18px] xs:h-6 h-[18px]" />
          ) : (
            <ArrowBigUpDash className="text-amber-400 xs:w-6 w-[18px] xs:h-6 h-[18px]" />
          )}
        </button>
        <button onClick={handleDeleteTicket}>
          <Trash className="text-red-400 xs:w-6 w-[18px] xs:h-6 h-[18px]" />
        </button>
        <Link href={`?modal-${index}=${modal === "true" ? "false" : "true"}`}>
          <File className="text-blue-600 xs:w-6 w-[18px] xs:h-6 h-[18px]" />
        </Link>
      </div>
      {modal === "true" && <Modal ticket={ticket} index={index} />}
    </>
  );
}
