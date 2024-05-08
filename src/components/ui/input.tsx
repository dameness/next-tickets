import { twMerge } from "tailwind-merge";
import { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge("p-2 rounded-lg w-full border-2", className)}
      {...props}
    />
  );
}
