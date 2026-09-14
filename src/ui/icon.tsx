import React from "react";

interface IconProps {
  icon: string;
  size: number;
  className?: string;
}

const Icon = ({ icon, size, className }: IconProps) => {
  return (
    <img
      src={icon}
      alt=""
      width={size}
      height={size}
      className={`${className}`}
    />
  );
};

export default Icon;
