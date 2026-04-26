import photoAll from "@/assets/photo_all.png";

export function GallerySection() {
  return (
    <section className="px-0">
      <img
        src={photoAll}
        alt="gallery"
        className="block w-full h-auto select-none pointer-events-none"
        draggable={false}
        loading="lazy"
      />
    </section>
  );
}
