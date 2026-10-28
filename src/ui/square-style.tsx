interface SquareStyleProps {
  className?: string;
}

function SquareStyle({ className }: SquareStyleProps) {
  return (
    <div className={`absolute -rotate-30 ${className || ""}`}>
      <div className="relative">
        <div className="absolute border-4 border-borderStyles w-7 h-7 z-10"></div>
        <div className="absolute top-1.5 left-1.5 w-7 h-7 bg-orange-500"></div>
      </div>
    </div>
  );
}

export default SquareStyle;
