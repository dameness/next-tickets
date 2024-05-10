"use client";

import Input from "@/components/ui/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { TicketSchema, type Ticket } from "@/models/zod/ticket";

export default function NewTicket() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Ticket>({
    resolver: zodResolver(TicketSchema),
    defaultValues: {
      customerId: "",
    },
  });

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

      <div className="flex justify-between px-1.5">
        <h1 className="text-xl font-semibold">Title</h1>
        {errors.name && <h1 className="text-red-500">{errors.name.message}</h1>}
      </div>
      <Input
        className={`${errors.name ? "border border-red-400" : "border-2"}`}
        placeholder="Enter the title..."
        {...register("name")}
      />

      <div className="flex justify-between px-1.5">
        <h1 className="text-xl font-semibold">Problem description</h1>
        {errors.description && (
          <h1 className="text-red-500">{errors.description.message}</h1>
        )}
      </div>
      <textarea
        className={`p-2 rounded-lg w-full ${
          errors.description ? "border border-red-400" : "border-2"
        }`}
        placeholder="Describe your issue..."
        {...register("description")}
      />

      <div className="flex justify-between px-1.5">
        <h1 className="text-xl font-semibold">Customer</h1>
        {errors.customerId && (
          <h1 className="text-red-500">{errors.customerId.message}</h1>
        )}
      </div>
      <select
        className={`p-2 bg-transparent rounded-lg w-full ${
          errors.customerId ? "border border-red-400" : "border-2"
        }`}
        {...register("customerId")}
      >
        <option value="">Select a customer...</option>
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
