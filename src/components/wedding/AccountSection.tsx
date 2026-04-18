import { useState } from "react";

type Account = { side: "신랑"; bank: string; number: string; name?: string } | { side: "신부"; bank: string; number: string; name?: string };

const accounts: Account[] = [
  { side: "신랑", bank: "기업은행", number: "010-6507-3885", name: "구동환" },
  { side: "신부", bank: "카카오뱅크", number: "3333-15-5072765", name: "조현아" },
];

export function AccountSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const copy = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text.replace(/-/g, ""));
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <section className="px-6">
      <h2 className="section-title mb-4">마음 전하실 곳</h2>

      <p className="text-center text-xs text-foreground/75 leading-relaxed mb-6" style={{ fontFamily: "var(--font-serif)" }}>
        참석이 어려운 분들을 위해<br />
        부득이하게 계좌번호를 안내 드립니다.<br />
        너그럽게 양해 부탁드립니다.
      </p>

      <div className="space-y-2">
        {accounts.map((a, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={i} className="bg-card rounded-md shadow-[var(--shadow-soft)] border border-border/50 overflow-hidden">
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full px-4 py-3 flex items-center justify-between text-sm"
              >
                <span className="text-primary font-medium">{a.side}</span>
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className={`transition ${isOpen ? "rotate-180" : ""} text-muted-foreground`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-1 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-1">{a.bank} {a.name && `· ${a.name}`}</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm text-foreground tabular-nums">{a.number}</p>
                    <button
                      onClick={() => copy(a.number, i)}
                      className="text-xs px-3 py-1.5 rounded bg-accent/15 text-accent hover:bg-accent/25"
                    >
                      {copiedIdx === i ? "복사됨" : "복사"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
