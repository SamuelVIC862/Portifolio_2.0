import React from "react";

interface SectionProps {
  className: string;
  children: React.ReactNode;
}

function Section({ children, className }: SectionProps) {
  return (
    <section
      className={`w-full py-4 transition-all duration-300 justify-center flex ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
