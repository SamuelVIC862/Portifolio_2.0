import React from "react";

interface SectionProps {
  className: string;
  children: React.ReactNode;
  id?: string;
}

function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`flex min-h-180 w-full scroll-mt-16 justify-center py-4 transition-all duration-300 items-center ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
