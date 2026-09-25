import React from "react";

interface SectionProps {
  className: string;
  children: React.ReactNode;
}

function Section({ children, className }: SectionProps) {
  return (
    <section className={`flex-1 min-h-screen py-4 ${className}`}>
      {children}
    </section>
  );
}

export default Section;
