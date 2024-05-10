"use client";

import Input from "@/components/ui/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { CustomerSchema, type Customer } from "@/models/zod/customer";

export default function NewCustomer() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Customer>({
    resolver: zodResolver(CustomerSchema),
  });

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

      <div className="flex justify-between px-1.5">
        <h1 className="text-xl font-semibold">Name</h1>
        {errors.name && <h1 className="text-red-500">{errors.name.message}</h1>}
      </div>
      <Input
        className={`${errors.name ? "border border-red-400" : "border-2"}`}
        placeholder="Enter the name..."
        {...register("name")}
      />

      <div className="grid xs:grid-cols-2 grid-cols-1 gap-2">
        <div>
          <div className="flex justify-between px-1.5 mb-2">
            <h1 className="text-xl font-semibold">Telephone</h1>
            {errors.phone && (
              <h1 className="text-red-500">{errors.phone.message}</h1>
            )}
          </div>
          <Input
            className={`${errors.phone ? "border border-red-400" : "border-2"}`}
            placeholder="Enter the telephone..."
            {...register("phone")}
          />
        </div>
        <div>
          <div className="flex justify-between px-1.5 mb-2">
            <h1 className="text-xl font-semibold">E-mail</h1>
            {errors.email && (
              <h1 className="text-red-500">{errors.email.message}</h1>
            )}
          </div>
          <Input
            className={`${errors.email ? "border border-red-400" : "border-2"}`}
            placeholder="Enter the e-mail..."
            {...register("email")}
          />
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
