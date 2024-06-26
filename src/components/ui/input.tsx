import { twMerge } from "tailwind-merge";
import { ComponentProps, forwardRef } from "react";
import { FieldError } from "react-hook-form";

type InputProps = ComponentProps<"input"> & {
  error?: FieldError;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        className={twMerge(
          `p-2 rounded-lg w-full ${
            error ? "border border-red-400" : "border-2"
          }`,
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

export default Input;
