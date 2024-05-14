import { twMerge } from "tailwind-merge";
import { ComponentProps, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface Option {
  name: string;
  id?: string;
}

type SelectProps = ComponentProps<"select"> & {
  error?: FieldError;
  options: Option[];
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, error, children, ...props }, ref) => {
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
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    );
  }
);

export default Select;
