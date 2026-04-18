import introImg from "@/assets/intro.jpeg";

export function IntroSection() {
  return (
    <section className="relative w-full h-screen m-0 p-0 overflow-hidden">
      {/* Hero image */}
      <img
        src={introImg}
        alt="Happy wedding day - 구동환 조현아"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        draggable={false}
      />

      {/* Subtle bottom gradient for indicator readability */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/90"
        style={{ bottom: "28px" }}
      >
        <span
          className="text-[10px] tracking-[0.25em]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          SCROLL DOWN
        </span>
        <div className="animate-scroll-bounce">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
