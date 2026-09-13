import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  sectionName: string;
  className?: string;
}

function Button({ children, sectionName, className }: ButtonProps) {
  const scrollToSection = () => {
    document.getElementById(sectionName)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`bg-[#2e2e2e] p-2 ${className}`}
      onClick={scrollToSection}
    >
      {children}
    </button>
  );
}

export default Button;
