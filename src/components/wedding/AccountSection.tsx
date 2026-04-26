import { useState } from "react";

type Account = { side: "신랑" | "신부"; bank: string; number: string; name?: string; extra?: { label: string; bank: string; number: string; name: string } };

const accounts: Account[] = [
  { side: "신랑", bank: "기업은행", number: "010-6507-3885", name: "구동환" },
  {
    side: "신부",
    bank: "카카오뱅크",
    number: "3333-15-5072765",
    name: "조현아",
    extra: { label: "신부 어머니", bank: "국민은행", number: "573102-95-101535", name: "이명화" },
  },
];

export function AccountSection() {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({});
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const toggle = (i: number) => {
    setOpenMap((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const copy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text.replace(/-/g, ""));
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <section className="px-6">
      <h2 className="section-title mb-4">💌 마음 전하실 곳</h2>

      <p className="text-center text-sm text-foreground/80 leading-[1.95] mb-6 whitespace-pre-line" style={{ fontFamily: "var(--font-serif)" }}>
{`멀리서도 축하의 마음을
전하고 싶으신 분들을 위해
계좌번호를 안내드립니다.

소중한 축하를 보내주셔서 감사드리며,
따뜻한 마음에 깊이 감사드립니다.

— ˗ˋ ୨୧ ˊ˗ —

화환은 정중히 사양합니다.
축하의 마음만 감사히 받겠습니다.
너른 양해 부탁드립니다.`}
      </p>

      <div className="flex flex-col gap-3">
        {accounts.map((a, i) => {
          const isOpen = !!openMap[i];
          return (
            <div key={i} className="bg-card rounded-md shadow-[var(--shadow-soft)] border border-border/50 overflow-hidden transition-all">
              <button
                onClick={() => toggle(i)}
                className="w-full px-4 py-3 flex items-center justify-center gap-2 text-base"
              >
                <span className="text-primary font-semibold">{a.side}</span>
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""} text-muted-foreground`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 pt-2 border-t border-border/50">
                    <p className="text-sm font-medium text-foreground/80 mb-2">{a.bank} {a.name && `· ${a.name}`}</p>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm text-foreground tabular-nums break-all">{a.number}</p>
                      <button
                        onClick={() => copy(a.number, `${i}-main`)}
                        className="shrink-0 text-xs px-3 py-1.5 rounded bg-accent/15 text-accent hover:bg-accent/25"
                      >
                        {copiedKey === `${i}-main` ? "복사됨" : "복사"}
                      </button>
                    </div>

                    {a.extra && (
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <p className="text-sm font-medium text-foreground/80 mb-2">
                          <span className="text-primary mr-1">{a.extra.label}</span>
                          {a.extra.bank} · {a.extra.name}
                        </p>
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm text-foreground tabular-nums break-all">{a.extra.number}</p>
                          <button
                            onClick={() => copy(a.extra!.number, `${i}-extra`)}
                            className="shrink-0 text-xs px-3 py-1.5 rounded bg-accent/15 text-accent hover:bg-accent/25"
                          >
                            {copiedKey === `${i}-extra` ? "복사됨" : "복사"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
