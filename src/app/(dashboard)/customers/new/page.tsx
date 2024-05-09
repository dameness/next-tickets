"use client";

import Input from "@/components/ui/input";
import Link from "next/link";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import type { Customer } from "@/models/zod/customer";

export default function NewCustomer() {
  const { handleSubmit, register } = useForm<Customer>();

  const onValid: SubmitHandler<Customer> = (data) => {};

  const onInvalid: SubmitErrorHandler<Customer> = (errors) => {};

  return (
    <form
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="mt-4 flex flex-col w-full gap-2"
    >
      <div className="flex items-center gap-2 mb-2">
        <Link
          href="/customers"
          className="px-4 py-2 text-white bg-neutral-800 rounded-lg"
        >
          Return
        </Link>
        <h1 className="text-3xl font-semibold">New customer</h1>
      </div>

      <h1 className="text-xl font-semibold">Name</h1>
      <Input placeholder="Enter the name..." {...register("name")} />

      <div className="grid xs:grid-cols-2 grid-cols-1 gap-2">
        <div>
          <h1 className="text-xl font-semibold">Telephone</h1>
          <Input placeholder="Enter the telephone..." {...register("phone")} />
        </div>
        <div>
          <h1 className="text-xl font-semibold">E-mail</h1>
          <Input placeholder="Enter the e-mail..." {...register("email")} />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-400 rounded-lg w-full p-2 mt-4 text-white font-semibold"
      >
        Register
      </button>
    </form>
  );
}
