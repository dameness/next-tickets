import { twMerge } from "tailwind-merge";
import { ComponentProps, forwardRef } from "react";

type InputProps = ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={twMerge("p-2 rounded-lg w-full border-2", className)}
        {...props}
        ref={ref}
      />
    );
  }
);

export default Input;
