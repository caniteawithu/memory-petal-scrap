import photoAll from "@/assets/photo_all.png";
import photoTitle from "@/assets/photo_title.png";

export function GallerySection() {
  return (
    <section className="px-0">
      <div className="px-6 mb-4 flex justify-center">
        <img
          src={photoTitle}
          alt="photo"
          className="block w-full max-w-[280px] h-auto select-none pointer-events-none"
          draggable={false}
          loading="lazy"
        />
      </div>
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
