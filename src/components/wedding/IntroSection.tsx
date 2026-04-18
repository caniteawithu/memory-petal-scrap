import { useEffect, useState } from "react";
import intro1 from "@/assets/intro1.png";
import intro2 from "@/assets/intro2.png";

export function IntroSection() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpened(true), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="px-6 pt-10 pb-2">
      {/* Envelope → Photo reveal */}
      <div className="flex justify-center mb-8">
        <div
          className="relative w-[88%] max-w-[300px]"
          style={{ aspectRatio: "1 / 1.05", perspective: "900px" }}
        >
          {/* Envelope (intro1) */}
          <div
            className="absolute inset-0 flex items-start justify-center"
            style={{
              transform: opened
                ? "rotate(-2deg) translateY(-6px) rotateX(-22deg)"
                : "rotate(-2deg) translateY(0) rotateX(0deg)",
              transformOrigin: "top center",
              opacity: opened ? 0.85 : 1,
              transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
              zIndex: 1,
            }}
          >
            <img
              src={intro1}
              alt="Happy wedding day envelope"
              className="w-[78%] h-auto select-none pointer-events-none"
              draggable={false}
            />
          </div>

          {/* Photo (intro2) */}
          <div
            className="absolute inset-0 flex items-end justify-center"
            style={{
              transform: opened
                ? "rotate(1.5deg) translateY(0) scale(1)"
                : "rotate(1.5deg) translateY(20px) scale(0.95)",
              opacity: opened ? 1 : 0,
              transition:
                "transform 0.7s ease-out 0.15s, opacity 0.7s ease-out 0.15s",
              zIndex: 2,
            }}
          >
            <div className={opened ? "animate-photo-float w-[88%]" : "w-[88%]"}>
              <img
                src={intro2}
                alt="구동환 조현아 폴라로이드 사진"
                className="w-full h-auto select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="text-center space-y-5 px-2" style={{ fontFamily: "var(--font-serif)" }}>
        <p className="text-lg text-primary">
          구동환 <span className="text-accent">♡</span> 조현아
        </p>
        <p className="text-base text-foreground">결혼합니다 ˚₊·</p>

        <p className="text-sm text-foreground/80 leading-relaxed pt-2">
          <strong className="text-primary">2026년 7월 4일 오후 12시 30분</strong>
          <br />
          더블유웨딩시티 5층 스위트가든홀
        </p>

        <p className="text-xs text-muted-foreground py-2">— ˗ˋ ୨୧ ˊ˗ —</p>

        <p className="text-sm text-foreground/85 leading-loose whitespace-pre-line">
          {`비가 오면 그치길 바라는 게 아니라
빗속에서 춤추는 법을 배우는 게 인생이래요.

우산이 없는 날에도
장마가 이어지는 날에도
태풍 속에서도
내일을 기대하는 마음으로
함께 춤추며 살아가려 합니다.

첫 스텝 밟는 날, 함께 축하해 주세요 🎶
💃🏻🪩🕺🏻`}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-10 mb-2">
        <div className="animate-bounce-slow text-primary/60">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
