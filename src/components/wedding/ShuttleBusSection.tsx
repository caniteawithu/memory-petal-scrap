import { Phone, MessageSquare } from "lucide-react";

const DRIVER_NAME = "손경호 버스기사님 🧑🏻‍✈️";
const DRIVER_TEL = "010-5596-7015";
const BUS_INFO = "영진고속관광 경남72 바 9774";

const SCHEDULE = [
  { time: "9:00", place: "진주 신안동 공설운동장 1문" },
  { time: "9:20", place: "진주 초전 농산물 공판장" },
];

export function ShuttleBusSection() {
  const telHref = `tel:${DRIVER_TEL.replace(/-/g, "")}`;
  const smsHref = `sms:${DRIVER_TEL.replace(/-/g, "")}`;

  return (
    <section className="px-6">
      <h2 className="section-title mb-6">🚌 진주 출발 하객 전세버스 안내</h2>

      <p
        className="text-center text-sm text-foreground/80 leading-[1.9] mb-6"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        먼 거리에서 오시는 하객분들을 위해
        <br />
        결혼식 당일 전세버스를 준비하였습니다.
        <br />
        기쁜 마음으로 자리를 빛내주시면
        <br />
        감사한 마음으로 모시겠습니다.
      </p>

      {/* 버스 정보 카드 */}
      <div
        className="paper-note bg-[var(--postit-1)] mb-4"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        <p className="text-xs text-muted-foreground mb-1 text-center">버스 정보</p>
        <p className="text-center font-semibold text-foreground">{BUS_INFO}</p>
      </div>

      {/* 기사님 정보 */}
      <div
        className="paper-note bg-[var(--postit-3)] mb-6"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-semibold text-foreground">{DRIVER_NAME}</p>
            <p className="text-foreground/75 text-lg">{DRIVER_TEL}</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={telHref}
              aria-label="전화 걸기"
              className="w-10 h-10 rounded-full bg-accent/15 text-accent hover:bg-accent/25 inline-flex items-center justify-center active:scale-95 transition"
            >
              <Phone size={18} />
            </a>
            <a
              href={smsHref}
              aria-label="문자 보내기"
              className="w-10 h-10 rounded-full bg-primary/15 text-primary hover:bg-primary/25 inline-flex items-center justify-center active:scale-95 transition"
            >
              <MessageSquare size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* 탑승 시간 */}
      <div className="space-y-3 mb-5">
        {SCHEDULE.map((s) => (
          <div
            key={s.time}
            className="paper-note bg-[var(--postit-2)] flex items-center gap-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <div className="shrink-0 text-center min-w-[72px]">
              <p className="text-[11px] text-foreground/60 leading-none mb-1">🕘 탑승</p>
              <p className="text-xl font-extrabold text-primary leading-tight">{s.time}</p>
            </div>
            <div className="w-px self-stretch bg-border/60" />
            <p className="text-sm font-semibold text-foreground/85 leading-snug">{s.place}</p>
          </div>
        ))}
      </div>

      <p
        className="text-foreground/60 leading-[1.8] text-center font-sans text-base"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        예식 후 부산에서 진주로 출발하는 시간은
        <br />
        기사님께서 식 당일 별도로 안내드릴 예정입니다.
      </p>
    </section>
  );
}
