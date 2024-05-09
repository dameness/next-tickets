"use client";

import Input from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import type { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import type { Ticket } from "@/models/zod/ticket";

export default function NewTicket() {
  const { handleSubmit, register } = useForm<Ticket>();

  const onValid: SubmitHandler<Ticket> = (data) => {};

  const onInvalid: SubmitErrorHandler<Ticket> = (errors) => {};

  return (
    <form
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="mt-4 flex flex-col w-full gap-2"
    >
      <div className="flex items-center gap-2 mb-2">
        <Link
          href="/tickets"
          className="px-4 py-2 text-white bg-neutral-800 rounded-lg"
        >
          Return
        </Link>
        <h1 className="text-3xl font-semibold">New ticket</h1>
      </div>

      <h1 className="text-xl font-semibold">Title</h1>
      <Input placeholder="Enter the title..." {...register("name")} />

      <h1 className="text-xl font-semibold">Problem description</h1>
      <textarea
        className="p-2 rounded-lg w-full border-2"
        placeholder="Describe your issue..."
        {...register("description")}
      />

      <h1 className="text-xl font-semibold">Select customer</h1>
      <select
        className="p-2 bg-transparent rounded-lg w-full border-2"
        {...register("customerId")}
      >
        <option value="x">Customer 1</option>
      </select>

      <button
        type="submit"
        className="bg-blue-400 rounded-lg w-full p-2 mt-4 text-white font-semibold"
      >
        Register
      </button>
    </form>
  );
}
