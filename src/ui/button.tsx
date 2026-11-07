import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  sectionName?: string;
  className?: string;
  variant?: "default" | "icon" | "link" | "icon2" | "projects";
  link?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({
  children,
  sectionName,
  link,
  className,
  variant = "default",
  onClick,
}: ButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
      return;
    }

    if (sectionName) {
      document.getElementById(sectionName)?.scrollIntoView({
        behavior: "smooth",
      });
    }

    onClick?.(event);
  };

  const variants = {
    default: "px-4 hover:text-primary w-fit text-left text-secondary min-w-28",
    icon: "p-2 rounded-full hover:text-primary size-10 text-secondary min-w-28",
    link: "",
    icon2:
      "p-2 w-4 text-center hover:bg-bgContrastHover w-10 h-10 bg-bgContrast text-textContrast",
    projects:
      "absolute -top-5 right-5 flex items-center justify-center size-12 bg-bgContrast dark:bg-bgSecondary text-textContrast transition-colors hover:bg-orange-500 z-10",
  };

  return (
    <button
      className={`group p-2 transition-all duration-300 flex flex-col gap-1 ${variants[variant]} ${className}`}
      onClick={handleClick}
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
