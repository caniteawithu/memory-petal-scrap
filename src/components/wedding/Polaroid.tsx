import { Placeholder } from "./Placeholder";

type PolaroidProps = {
  filename: string;
  rotate?: number;
  caption?: string;
  className?: string;
  tapeColor?: string;
};

export function Polaroid({ filename, rotate = 0, caption, className = "", tapeColor }: PolaroidProps) {
  return (
    <div
      className={`polaroid ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {tapeColor && (
        <span
          className="tape"
          style={{
            top: "-8px",
            left: "50%",
            transform: "translateX(-50%) rotate(-2deg)",
            width: "44px",
            height: "16px",
            background: tapeColor,
          }}
        />
      )}
      <Placeholder filename={filename} aspect="aspect-square" />
      {caption && (
        <p className="mt-2 text-center text-xs text-foreground/70" style={{ fontFamily: "var(--font-serif)" }}>
          {caption}
        </p>
      )}
    </div>
  );
}
