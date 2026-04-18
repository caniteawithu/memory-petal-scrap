import { Polaroid } from "./Polaroid";
import photoTitle from "@/assets/photo_title.png";

const rotations = [-2, 1, -1, 2, -1.5, 1.5, -2, 1, -1];
const tapeColors = [
  "oklch(0.88 0.12 95 / 0.7)",
  "oklch(0.85 0.1 145 / 0.7)",
  "oklch(0.85 0.08 25 / 0.7)",
];

export function GallerySection() {
  return (
    <section className="px-6">
      <div className="flex justify-center mb-6">
        <div className="w-[180px]" style={{ transform: "rotate(-2deg)" }}>
          <img
            src={photoTitle}
            alt="photo"
            className="w-full h-auto select-none pointer-events-none"
            draggable={false}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <Polaroid
            key={i}
            filename={`photo${i + 1}.png`}
            rotate={rotations[i]}
            tapeColor={i % 2 === 0 ? tapeColors[i % tapeColors.length] : undefined}
          />
        ))}
      </div>
    </section>
  );
}
