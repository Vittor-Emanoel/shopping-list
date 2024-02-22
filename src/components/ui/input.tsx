import * as React from "react";
import { cn } from "../utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, id, name, type, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <input
        id={inputId}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border focus:border-purple bg-background px-3 py-2 text-sm outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
