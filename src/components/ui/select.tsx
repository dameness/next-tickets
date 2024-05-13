import { twMerge } from "tailwind-merge";
import { ComponentProps, forwardRef } from "react";
import { FieldError } from "react-hook-form";

type SelectProps = ComponentProps<"select"> & {
  error?: FieldError;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <select
        className={twMerge(
          `p-2 bg-transparent rounded-lg w-full ${
            error ? "border border-red-400" : "border-2"
          }`,
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </select>
    );
  }
);

export default Select;
