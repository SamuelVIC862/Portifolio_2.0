import React from "react";

interface ImageProps {
  src: string;
  size: number;
  className?: string;
}

const Icon = ({ src, size, className }: ImageProps) => {
  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      className={`${className}`}
    />
  );
};

export default Icon;
