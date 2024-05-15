"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";
import TextArea from "../ui/textarea";

const schema = z.object({
  email: z
    .string()
    .min(1, "Customer e-mail required")
    .email("Enter a valid customer e-mail"),
  name: z.string().min(1, "Title required"),
  description: z.string().min(1, "Description required"),
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
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const [customer, setCustomer] = useState<CustomerData | null>({
    id: "1",
    name: "Bernardo",
  });

  const handleClearCustomer = () => {
    setCustomer(null);
    setValue("email", "");
  };

  return (
    <form className="flex flex-col gap-3 bg-slate-200 py-6 px-2 rounded-lg border-2 ">
      {customer ? (
        <>
          {" "}
          <div className="flex items-center justify-between bg-slate-200 py-6 px-4 rounded-lg border-2">
            <h1 className="flex gap-2 text-lg">
              <strong>Selected customer:</strong> {customer.name}
            </h1>
            <button
              onClick={handleClearCustomer}
              className="flex items-center justify-center text-red-500"
            >
              <X />
            </button>
          </div>
          <div className="flex justify-between px-1.5">
            <label htmlFor="name" className="font-semibold">
              Problem name
            </label>
            {errors.name && (
              <h1 className="text-red-500">{errors.name.message}</h1>
            )}
          </div>
          <Input
            id="name"
            error={errors.name}
            placeholder="Enter the name..."
            {...register("name")}
          />
          <div className="flex justify-between px-1.5">
            <label htmlFor="description" className="font-semibold">
              Problem description
            </label>
            {errors.description && (
              <h1 className="text-red-500">{errors.description.message}</h1>
            )}
          </div>
          <TextArea
            id="description"
            error={errors.description}
            placeholder="Enter the description..."
            {...register("description")}
          />
          <button
            type="submit"
            className="bg-blue-500 w-full h-11 px-2 text-white rounded-lg font-bold"
          >
            Register
          </button>
        </>
      ) : (
        <>
          <Input
            id="email"
            error={errors.email}
            placeholder="Enter the e-mail..."
            {...register("email")}
          />

          <button className="text-white font-bold bg-blue-500 flex items-center justify-center gap-3 px-2 h-10 rounded-lg">
            Search customer
            <Search />
          </button>
        </>
      )}
    </form>
  );
}
