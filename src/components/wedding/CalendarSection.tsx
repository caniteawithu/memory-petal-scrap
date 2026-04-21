import { useEffect, useState } from "react";
import { ContactModal } from "./ContactModal";

const WEDDING_DATE = new Date("2026-07-04T12:30:00+09:00");

function useCountdown() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  if (!now) return { days: 0, hours: 0, minutes: 0, seconds: 0, ready: false };
  const diff = Math.max(0, WEDDING_DATE.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds, ready: true };
}

export function CalendarSection() {
  const { days, hours, minutes, seconds, ready } = useCountdown();
  const [open, setOpen] = useState(false);

  // July 2026: starts on Wednesday (day index 3). 31 days.
  const month = 7;
  const year = 2026;
  const firstDay = new Date(year, month - 1, 1).getDay(); // 3 (Wed)
  const daysInMonth = 31;
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <section className="px-6">
      <div className="bg-card rounded-md p-5 shadow-[var(--shadow-paper)] mx-2" style={{ transform: "rotate(-0.5deg)" }}>
        <p className="text-center font-serif text-lg mb-3 text-primary" style={{ fontFamily: "var(--font-serif)" }}>
          7월
        </p>
        <div className="grid grid-cols-7 gap-1 text-center text-xs overflow-visible">
          {["일", "월", "화", "수", "목", "금", "토"].map((d, i) => (
            <div key={d} className={`py-1 font-medium ${i === 0 ? "text-destructive/80" : "text-muted-foreground"}`}>
              {d}
            </div>
          ))}
          {cells.map((d, i) => {
            const isWeddingDay = d === 4;
            return (
              <div key={i} className="aspect-square flex items-center justify-center">
                {d && (
                  isWeddingDay ? (
                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-accent text-[13px] font-bold text-primary-foreground shadow-sm">
                      {d}
                    </span>
                  ) : (
                    <span className="w-7 h-7 flex items-center justify-center rounded-full text-[15px] text-foreground/80">
                      {d}
                    </span>
                  )
                )}
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-center text-base text-foreground/85 mt-6 leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
        <span className="text-primary">구동환</span> <span className="text-accent">♥</span>{" "}
        <span className="text-primary">조현아</span>의 결혼식이
        <br />
        <strong className="text-accent">{ready ? `${days}일` : "—"}</strong> 남았습니다
      </p>

      <div className="grid grid-cols-4 gap-2 mt-4 text-center">
        {[
          { label: "DAYS", value: days },
          { label: "HOUR", value: hours },
          { label: "MIN", value: minutes },
          { label: "SEC", value: seconds },
        ].map((b) => (
          <div key={b.label} className="bg-secondary rounded-md py-2 px-1">
            <div className="text-base font-bold text-primary tabular-nums">{ready ? b.value : "—"}</div>
            <div className="text-[10px] text-muted-foreground tracking-wider">{b.label}</div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setOpen(true)}
        className="mt-6 w-full py-3 rounded-md bg-accent text-accent-foreground text-base font-bold hover:bg-accent/90 active:scale-[0.98] transition inline-flex items-center justify-center gap-2"
      >
        <span>📞</span>
        <span>연락하기</span>
      </button>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
