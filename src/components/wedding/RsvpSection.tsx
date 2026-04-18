import { useEffect, useState } from "react";
import { BottomSheet } from "./BottomSheet";

type Side = "신랑측" | "신부측";
type Attend = "참석" | "불참석";
type Meal = "예정" | "안함" | "미정";

type Submission = {
  side: Side;
  attend: Attend;
  count: string;
  companion: string;
  meal: Meal;
  name: string;
  createdAt: string;
};

const STORAGE_KEY = "rsvp_submissions";
const HIDE_KEY = "rsvp_hide_today";

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

export function RsvpSection() {
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState<Side>("신랑측");
  const [attend, setAttend] = useState<Attend>("참석");
  const [meal, setMeal] = useState<Meal>("예정");
  const [name, setName] = useState("");
  const [count, setCount] = useState("1");
  const [companion, setCompanion] = useState("");
  const [hideToday, setHideToday] = useState(false);
  const [done, setDone] = useState(false);

  // Auto-open after 2s, once a day
  useEffect(() => {
    const hide = localStorage.getItem(HIDE_KEY);
    if (hide === getToday()) return;
    const t = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("성함을 입력해 주세요.");
      return;
    }
    const submission: Submission = {
      side, attend, count, companion, meal, name: name.trim(),
      createdAt: new Date().toISOString(),
    };
    const list: Submission[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    list.push(submission);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    if (hideToday) localStorage.setItem(HIDE_KEY, getToday());
    setDone(true);
    setTimeout(() => {
      setOpen(false);
      setDone(false);
    }, 1200);
  };

  return (
    <section className="px-6">
      <button
        onClick={() => setOpen(true)}
        className="w-full py-3 rounded-md border-2 border-dashed border-primary/40 text-sm text-primary font-medium hover:bg-primary/5 transition"
      >
        참석 의사 전달하기
      </button>

      <BottomSheet open={open} onClose={() => setOpen(false)} title="참석 의사 전달하기">
        {done ? (
          <div className="py-12 text-center">
            <div className="text-3xl mb-3">💌</div>
            <p className="text-sm text-primary font-medium">소중한 마음 감사합니다</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            {/* Side toggle */}
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">구분</label>
              <div className="grid grid-cols-2 gap-2">
                {(["신랑측", "신부측"] as Side[]).map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setSide(s)}
                    className={`py-2.5 rounded-md text-sm transition ${
                      side === s
                        ? "bg-accent text-accent-foreground font-medium"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">참석 여부</label>
              <div className="flex gap-3">
                {(["참석", "불참석"] as Attend[]).map((a) => (
                  <label key={a} className="flex items-center gap-1.5 text-sm">
                    <input
                      type="radio"
                      checked={attend === a}
                      onChange={() => setAttend(a)}
                      className="accent-[var(--primary)]"
                    />
                    {a}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">성함 *</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={20}
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="성함을 입력해 주세요"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">참석 인원</label>
                <input
                  type="number" min="1" max="20"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">동행인</label>
                <input
                  value={companion}
                  onChange={(e) => setCompanion(e.target.value)}
                  maxLength={50}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="함께 오시는 분"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">식사 여부</label>
              <div className="flex gap-3">
                {(["예정", "안함", "미정"] as Meal[]).map((m) => (
                  <label key={m} className="flex items-center gap-1.5 text-sm">
                    <input
                      type="radio"
                      checked={meal === m}
                      onChange={() => setMeal(m)}
                      className="accent-[var(--primary)]"
                    />
                    {m}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90"
            >
              참석 의사 전달하기
            </button>

            <label className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground pt-1">
              <input
                type="checkbox"
                checked={hideToday}
                onChange={(e) => setHideToday(e.target.checked)}
                className="accent-[var(--primary)]"
              />
              오늘 하루 보지 않기
            </label>
          </form>
        )}
      </BottomSheet>
    </section>
  );
}
