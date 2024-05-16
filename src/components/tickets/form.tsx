"use client";

import Input from "@/components/ui/input";
import Link from "next/link";
import TextArea from "@/components/ui/textarea";
import Select from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { TicketSchema, Ticket } from "@/models/zod/ticket";
import { useRouter } from "next/navigation";
import api from "@/config/api";
import { Customer } from "@/models/zod/customer";
import { toast } from "sonner";
import { AxiosError } from "axios";

interface Props {
  userId?: string;
  customers: Customer[];
}

export default function TicketForm({ userId, customers }: Props) {
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

  const router = useRouter();

  const onValid: SubmitHandler<Ticket> = (data) => {
    api
      .post("/tickets", { ...data, userId, status: "OPEN" })
      .then(() => {
        toast("Ticket registered!");
        router.replace("/tickets");
        router.refresh();
      })
      .catch((error) => {
        console.error(error);
        toast(
          `Error sending ticket! ${
            error instanceof AxiosError && ` - ${error.message}`
          }`
        );
      });
  };

  const onInvalid: SubmitErrorHandler<Ticket> = (errors) => {};

  return (
    <form
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="mt-4 mb-8 flex flex-col w-full gap-2"
    >
      <div className="flex items-center gap-2 mb-2">
        <Link
          href="/tickets"
          className="px-4 py-2 text-white bg-neutral-800 rounded-lg"
        >
          Return
        </Link>
        <h1 className="xs:text-3xl text-[27px]/8 font-semibold">New ticket</h1>
      </div>

      <div className="flex justify-between px-1.5">
        <label htmlFor="name" className="text-xl font-semibold">
          Title
        </label>
        {errors.name && <h1 className="text-red-500">{errors.name.message}</h1>}
      </div>
      <Input
        id="name"
        error={errors.name}
        placeholder="Enter the title..."
        {...register("name")}
      />

      <div className="flex justify-between px-1.5">
        <label htmlFor="description" className="text-xl font-semibold">
          Problem description
        </label>
        {errors.description && (
          <h1 className="text-red-500">{errors.description.message}</h1>
        )}
      </div>
      <TextArea
        id="description"
        error={errors.description}
        placeholder="Describe your issue..."
        {...register("description")}
      />

      <div className="flex justify-between px-1.5">
        <label htmlFor="customerId" className="text-xl font-semibold">
          Customer
        </label>
        {errors.customerId && (
          <h1 className="text-red-500">{errors.customerId.message}</h1>
        )}
      </div>
      <Select
        id="customerId"
        error={errors.customerId}
        options={customers}
        {...register("customerId")}
      >
        <option value="">Select a customer...</option>
      </Select>

      <button
        type="submit"
        className="bg-blue-400 rounded-lg w-full p-2 mt-4 text-white font-semibold"
      >
        Register
      </button>
    </form>
  );
}
