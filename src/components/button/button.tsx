import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "alert" | "regular" | "grayscale";
}

export const Button = ({ children, variant = "regular" }: ButtonProps) => {
  return (
    <button
      className={classNames(
        "px-4 py-3 rounded-[8px] h-4 flex items-center text-white",
        {
          "bg-blue-300  transition-all duration-200 hover:bg-blue-400":
            variant === "regular",
        },
        {
          "bg-red-300  transition-all duration-200 hover:bg-red-400":
            variant === "alert",
        },
        {
          "bg-gray-300  transition-all duration-200 hover:bg-gray-400":
            variant === "grayscale",
        },
      )}
      onClick={() => console.log("clicked")}
    >
      {children}
    </button>
  );
};
