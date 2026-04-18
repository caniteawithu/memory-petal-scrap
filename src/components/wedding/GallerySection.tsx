import { Polaroid } from "./Polaroid";
import { Placeholder } from "./Placeholder";

const rotations = [-2, 1, -1, 2, -1.5, 1.5, -2, 1, -1];
const tapeColors = [
  "oklch(0.88 0.12 95 / 0.7)",
  "oklch(0.85 0.1 145 / 0.7)",
  "oklch(0.85 0.08 25 / 0.7)",
];

export function GallerySection() {
  return (
    <section className="px-6">
      <h2 className="section-title mb-3">갤러리</h2>
      <div className="flex justify-center mb-6">
        <div className="w-[140px]" style={{ transform: "rotate(-2deg)" }}>
          <Placeholder filename="photo_title.png" aspect="aspect-[3/1]" />
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
