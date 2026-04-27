export function IntroTextSection() {
  return (
    <section className="px-6 pt-12 text-center pb-[30px]" style={{ fontFamily: "var(--font-serif)" }}>
      {/* Names */}
      <h2 className="font-semibold">
        구동환 그리고 조현아
        <br />
        결혼합니다 ♥
      </h2>
      {/* Date & Place — emphasized */}
      <p className="text-primary font-semibold leading-relaxed mt-7 text-sm">
        2026년 7월 4일 오후 12시 30분
        <br />
        더블유웨딩시티 5층 스위트가든홀
      </p>

      {/* Divider — rounder star style */}
      <div className="flex items-center justify-center gap-3 my-8 text-accent" aria-hidden="true">
        <span className="h-px w-10 bg-accent/40" />
        <span className="leading-none text-lg">​♥</span>
        <span className="leading-none text-lg">♥</span>
        <span className="leading-none text-lg">♥</span>
        <span className="h-px w-10 bg-accent/40" />
      </div>

      {/* Dancing emojis — moved above body text */}
      <p className="my-4 leading-none text-lg" aria-hidden="true">
        💃🏻 🪩 🕺🏻
      </p>

      {/* Message */}
      <p className="text-foreground/85 leading-[2] whitespace-pre-line mt-4 text-sm font-semibold">
        {`비가 오면 그치길 바라는 게 아니라
빗속에서 춤추는 법을 배우는 게 인생이래요.

우산이 없는 날에도
장마가 이어지는 날에도
태풍 속에서도
내일을 기대하는 마음으로
함께 춤추며 살아가려 합니다.

첫 스텝 밟는 날, 함께 축하해 주세요 🎶`}
      </p>
    </section>
  );
}
