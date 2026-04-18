export function IntroTextSection() {
  return (
    <section
      className="px-6 pt-12 pb-12 text-center"
      style={{ fontFamily: "var(--font-serif)" }}
    >
      {/* Names */}
      <h2 className="text-2xl font-bold text-primary tracking-wide">
        구동환 <span className="text-accent">♡</span> 조현아
      </h2>

      {/* Subtitle */}
      <p className="text-lg text-foreground mt-3">결혼합니다</p>

      {/* Date & Place */}
      <p className="text-sm text-foreground/80 leading-relaxed mt-6">
        <strong className="text-primary">2026년 7월 4일 오후 12시 30분</strong>
        <br />
        더블유웨딩시티 5층 스위트가든홀
      </p>

      {/* Divider */}
      <p className="text-xs text-muted-foreground my-7">— ˗ˋ ୨୧ ˊ˗ —</p>

      {/* Message */}
      <p className="text-[15px] text-foreground/85 leading-loose whitespace-pre-line">
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
