import photoTitle from "@/assets/photo_title.png";
import photo1 from "@/assets/photo1.png";
import photo2 from "@/assets/photo2.png";
import photo3 from "@/assets/photo3.png";
import photo4 from "@/assets/photo4.png";
import photo5 from "@/assets/photo5.png";
import photo6 from "@/assets/photo6.png";
import photo7 from "@/assets/photo7.png";
import photo8 from "@/assets/photo8.png";
import photo9 from "@/assets/photo9.png";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9];

// Group into pages of 3
const pages: string[][] = [];
for (let i = 0; i < photos.length; i += 3) {
  pages.push(photos.slice(i, i + 3));
}

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

      <div
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      >
        {pages.map((group, idx) => (
          <div
            key={idx}
            className="flex shrink-0 w-full gap-2 snap-start"
          >
            {group.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`gallery ${idx * 3 + i + 1}`}
                className="w-1/3 h-auto object-cover select-none pointer-events-none"
                draggable={false}
                loading="lazy"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
