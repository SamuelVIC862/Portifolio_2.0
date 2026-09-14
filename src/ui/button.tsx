import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  sectionName?: string;
  className?: string;
  variant?: "default" | "icon" | "link";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({
  children,
  sectionName,
  className,
  variant = "default",
  onClick,
}: ButtonProps) {
  const scrollToSection = () => {
    if (!sectionName) {
      return;
    }

    document.getElementById(sectionName)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const variants = {
    default: "px-4 hover:text-primary w-fit",
    icon: "p-2 rounded-full hover:text-primary size-10",
    link: "",
  };

  return (
    <button
      className={`group p-2 text-secondary transition-all duration-300 flex flex-col min-w-28 gap-1 text-left ${variants[variant]} ${className}`}
      onClick={onClick ?? scrollToSection}
    >
      {children}
      <div
        className={`w-4 border-t-2 border-primary
      origin-left scale-x-0
      transition-transform duration-300
      group-hover:scale-x-100
      ${variant !== "default" ? "hidden" : ""}`}
      />
    </button>
  );
}

export default Button;
