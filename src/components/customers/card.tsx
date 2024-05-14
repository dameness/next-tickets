"use client";

import api from "@/config/api";
import { Customer } from "@/models/zod/customer";
import { useRouter } from "next/navigation";

export default function CustomerCard({ id, name, phone, email }: Customer) {
  const router = useRouter();
  async function handleDeleteCustomer() {
    api
      .delete(`/customers`, {
        params: { id },
      })
      .then(() => {
        alert("Customer deleted!");
      })
      .catch((error) => {
        console.error(error);
        alert("Error deleting customer!");
      })
      .finally(() => {
        router.refresh();
      });
  }

  return (
    <div className="flex flex-col justify-between gap-1 p-2 border-2 max-w-sm rounded-lg">
      <div className="flex-flex-col overflow-hidden">
        <h1>
          <span className="font-semibold">Name: </span> {name}
        </h1>
        <h1>
          <span className="font-semibold">Telephone: </span> {phone}
        </h1>
        <h1>
          <span className="font-semibold">E-mail: </span> {email}
        </h1>
      </div>
      <button
        onClick={handleDeleteCustomer}
        className="mt-2 px-2 bg-red-400 text-white rounded-lg mx-auto w-1/2 max-w-32"
      >
        Delete
      </button>
    </div>
  );
}
