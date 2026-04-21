import { useState } from "react";
import { Placeholder } from "./Placeholder";

export function FooterSection() {
  const [copied, setCopied] = useState(false);

  const share = () => {
    alert("카카오톡 공유 기능은 카카오 SDK 키 등록 후 활성화됩니다.");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <section className="px-6 pb-12">
      <h2 className="section-title mb-6">공유하기</h2>

      <div className="flex justify-center items-start mb-10">
        {/* Copy link circle button */}
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={copyLink}
            aria-label="링크 복사"
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg shadow-[var(--shadow-soft)] hover:scale-105 active:scale-95 transition"
          >
            🔗
          </button>
          <span className="text-[11px] text-foreground/80 text-center leading-tight">
            {copied ? "복사됨!" : "링크 복사"}
          </span>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[180px]" style={{ transform: "rotate(-1.5deg)" }}>
          <Placeholder filename="end.png (하단 이미지)" aspect="aspect-[4/3]" />
        </div>
      </div>

      <p className="text-center text-xs font-medium text-primary/80 tracking-wider mt-8">
        with love · 2026.07.04
      </p>
    </section>
  );
}
