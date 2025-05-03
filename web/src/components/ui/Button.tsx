import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded font-semibold shadow focus:outline-none"; // Adicionando o foco
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-100", // Mantém o "outline"
  };

  return (
    <button
      className={classNames(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
