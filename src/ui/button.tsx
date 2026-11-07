import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  sectionName?: string;
  className?: string;
  variant?: "default" | "icon" | "link" | "icon2" | "projects" | "footer";
  link?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  "aria-label"?: string;
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
}

function Button({
  children,
  sectionName,
  link,
  className,
  variant = "default",
  onClick,
  "aria-label": ariaLabel,
  "aria-expanded": ariaExpanded,
  "aria-controls": ariaControls,
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
    default: "px-4 hover:text-primary w-fit text-left text-secondary",
    footer: "px-4 text-sm hover:text-[#b3b3b3] w-fit text-left text-[#F2F2F2]",

    icon: "p-2 rounded-full hover:text-primary size-10 shrink-0 text-secondary",
    link: "",
    icon2:
      "p-2 size-10 shrink-0 text-center hover:bg-bgContrastHover bg-bgContrast text-textContrast",
    projects:
      "absolute -top-5 right-5 flex items-center justify-center size-12 bg-bgContrast dark:bg-bgSecondary text-textContrast transition-colors hover:bg-orange-500 z-10",
  };

  return (
    <button
      className={`group p-2 transition-all duration-300 flex flex-col ${variants[variant]} ${className}`}
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
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
