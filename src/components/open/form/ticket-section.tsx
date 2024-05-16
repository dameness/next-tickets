"use  client";

import Input from "@/components/ui/input";
import TextArea from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import api from "@/config/api";
import { toast } from "sonner";
import { AxiosError } from "axios";

const schema = z.object({
  name: z.string().min(1, "Title required"),
  description: z.string().min(1, "Description required"),
});

type formData = z.infer<typeof schema>;

interface Props {
  customerIds: string[];
}

export default function TicketSection({ customerIds }: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const onValid: SubmitHandler<formData> = (data) => {
    customerIds.map((customerId, index) => {
      api
        .post("/tickets", { ...data, customerId, status: "OPEN" })
        .then(() => {
          toast("Ticket sent!");
        })
        .catch((error) => {
          console.error(error);
          toast(
            `Error sending ticket ${index + 1}! ${
              error instanceof AxiosError && ` - ${error.message}`
            }`
          );
        });
    });
    setValue("name", "");
    setValue("description", "");
  };
  const onInvalid: SubmitErrorHandler<formData> = (error) => {};

  return (
    <form
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="flex flex-col gap-3 bg-slate-200 py-4 px-2 rounded-lg border-2"
    >
      <div className="flex justify-between px-1.5">
        <label htmlFor="name" className="font-semibold">
          Problem name
        </label>
        {errors.name && <h1 className="text-red-500">{errors.name.message}</h1>}
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
        className="bg-blue-500 mt-2 w-full h-11 px-2 text-white rounded-lg font-bold"
      >
        Register
      </button>
    </form>
  );
}
