import { twMerge } from "tailwind-merge";

export default function Button({
  variant,
  type = "button",
  onClick,
  children,
  className,
}: {
  variant: "primary" | "error" | "success" | "dark";
  type: "button" | "submit";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  if (variant === "primary") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={twMerge(
          "border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-100 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline",
          className,
        )}
      >
        {children}
      </button>
    );
  }

  if (variant === "success") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={twMerge(
          "border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-100 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline",
          className,
        )}
      >
        {children}
      </button>
    );
  }

  if (variant === "error") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={twMerge(
          "border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-100 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline",
          className,
        )}
      >
        {children}
      </button>
    );
  }

  if (variant === "dark") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={twMerge(
          "border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-100 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline",
          className,
        )}
      >
        {children}
      </button>
    );
  }
}
