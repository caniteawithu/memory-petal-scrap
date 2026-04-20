export function IntroTextSection() {
  return (
    <section
      className="px-6 pt-12 pb-12 text-center"
      style={{ fontFamily: "var(--font-serif)" }}
    >
      {/* Names */}
      <h2 className="text-2xl font-bold text-primary tracking-wide">
        구동환 <span className="text-accent">♥</span> 조현아
      </h2>

      {/* Subtitle */}
      <p className="text-xl text-foreground mt-3">결혼합니다</p>

      {/* Date & Place — emphasized */}
      <p className="text-base text-primary font-semibold leading-relaxed mt-7">
        2026년 7월 4일 오후 12시 30분
        <br />
        더블유웨딩시티 5층 스위트가든홀
      </p>

      {/* Divider — rounder star style */}
      <div
        className="flex items-center justify-center gap-3 my-8 text-accent"
        aria-hidden="true"
      >
        <span className="h-px w-10 bg-accent/40" />
        <span className="text-xl leading-none">✦</span>
        <span className="text-2xl leading-none">✿</span>
        <span className="text-xl leading-none">✦</span>
        <span className="h-px w-10 bg-accent/40" />
      </div>

      {/* Message */}
      <p className="text-[17px] text-foreground/85 leading-[2] whitespace-pre-line">
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
    </section>
  );
}
