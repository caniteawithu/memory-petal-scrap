import introImg from "@/assets/intro.jpeg";

export function IntroSection() {
  return (
    <section className="px-4 pt-4 pb-2">
      {/* Intro image */}
      <div className="flex justify-center mb-6">
        <img
          src={introImg}
          alt="Happy wedding day - 구동환 조현아"
          className="w-[88%] max-w-[420px] h-auto select-none pointer-events-none"
          draggable={false}
        />
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
      <div className="flex justify-center mt-8 mb-2">
        <div className="animate-bounce-slow text-primary/60">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
