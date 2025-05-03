import { InputHTMLAttributes } from "react";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
      {...props}
    />
  );
}
