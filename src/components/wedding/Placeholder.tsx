type PlaceholderProps = {
  filename: string;
  aspect?: string; // tailwind aspect class e.g. "aspect-square"
  rotate?: number;
  className?: string;
};

export function Placeholder({ filename, aspect = "aspect-square", rotate = 0, className = "" }: PlaceholderProps) {
  return (
    <div
      className={`placeholder-box ${aspect} ${className}`}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      <span className="opacity-80">{filename}</span>
    </div>
  );
}
