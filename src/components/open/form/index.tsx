"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { z } from "zod";
import Input from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";
import TicketSection from "./ticket-section";
import api from "@/config/api";
import { toast } from "sonner";
import { AxiosError } from "axios";

const schema = z.object({
  email: z
    .string()
    .min(1, "Customer e-mail required")
    .email("Enter a valid customer e-mail"),
});

type formData = z.infer<typeof schema>;

interface CustomerData {
  id: string;
  name: string;
}

export default function OpenTicketForm() {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const [customers, setCustomers] = useState<CustomerData[] | null>(null);

  const handleClearCustomers = () => {
    setCustomers(null);
    setValue("email", "");
  };

  const customerIds = customers?.map((customer) => customer.id);

  const onValid: SubmitHandler<formData> = (data) => {
    api
      .get("/customers", {
        params: {
          email: data.email,
        },
      })
      .then((res) => {
        setCustomers(res.data.customers);
      })
      .catch((error) => {
        console.error(error);
        setError("email", {
          message: `Error finding e-mail! ${
            error instanceof AxiosError && ` - ${error.message}`
          }`,
        });
      });
  };
  const onInvalid: SubmitErrorHandler<formData> = (error) => {};

  return (
    <>
      {customers && customers.length !== 0 ? (
        <>
          <div className="flex items-center justify-between bg-slate-200 py-6 px-4 mb-6 rounded-lg border-2">
            <h1 className="flex break-words gap-2 text-lg">
              <strong>Selected customer:</strong>
              {customers[0].name}
              {customers.length > 1 && ", and more..."}
            </h1>
            <button
              onClick={handleClearCustomers}
              className="flex items-center justify-center text-red-500"
            >
              <X />
            </button>
          </div>
          <TicketSection customerIds={customerIds!} />
        </>
      ) : (
        <form
          onSubmit={handleSubmit(onValid, onInvalid)}
          className="flex flex-col gap-3 bg-slate-200 py-6 px-2 rounded-lg border-2 "
        >
          <Input
            id="email"
            error={errors.email}
            placeholder="Enter the e-mail..."
            {...register("email")}
          />
          <div className="flex justify-between px-1.5">
            <div className="invisible"></div>
            {errors.email && (
              <h1 className="text-red-500">{errors.email.message}</h1>
            )}
          </div>

          <button
            type="submit"
            className="text-white hover:opacity-90 transition-all font-bold bg-blue-500 flex items-center justify-center gap-3 px-2 h-10 rounded-lg"
          >
            Search customer
            <Search />
          </button>
        </form>
      )}
    </>
  );
}
