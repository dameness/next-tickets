"use client";

import Input from "@/components/ui/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { CustomerSchema, type Customer } from "@/models/zod/customer";
import { useSession } from "next-auth/react";
import api from "@/config/api";
import { useRouter } from "next/navigation";

export default function NewCustomer() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Customer>({
    resolver: zodResolver(CustomerSchema),
  });

  const router = useRouter();
  const session = useSession();

  const onValid: SubmitHandler<Customer> = (data) => {
    api
      .post("/customers", { ...data, userId: session.data?.user.id })
      .then(() => {
        alert("Customer registered!");
      })
      .catch((error) => {
        console.error(error);
        alert("Error creating customer!");
      })
      .finally(() => {
        router.replace("/customers");
      });
  };

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
        <label htmlFor="name" className="text-xl font-semibold">
          Name
        </label>
        {errors.name && <h1 className="text-red-500">{errors.name.message}</h1>}
      </div>
      <Input
        id="name"
        error={errors.name}
        placeholder="Enter the name..."
        {...register("name")}
      />

      <div className="grid xs:grid-cols-2 grid-cols-1 gap-2">
        <div>
          <div className="flex justify-between px-1.5 mb-2">
            <label htmlFor="phone" className="text-xl font-semibold">
              Telephone
            </label>
            {errors.phone && (
              <h1 className="text-red-500">{errors.phone.message}</h1>
            )}
          </div>
          <Input
            id="phone"
            error={errors.phone}
            placeholder="Enter the telephone..."
            {...register("phone")}
          />
        </div>
        <div>
          <div className="flex justify-between px-1.5 mb-2">
            <label htmlFor="email" className="text-xl font-semibold">
              E-mail
            </label>
            {errors.email && (
              <h1 className="text-red-500">{errors.email.message}</h1>
            )}
          </div>
          <Input
            id="email"
            error={errors.email}
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
