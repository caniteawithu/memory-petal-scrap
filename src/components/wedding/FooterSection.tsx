import { useState } from "react";
import endImage from "@/assets/end.png";

export function FooterSection() {
  const [copied, setCopied] = useState(false);


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
        <div className="w-full">
          <img
            src={endImage}
            alt="end"
            className="w-full h-auto select-none pointer-events-none"
            draggable={false}
          />
        </div>
      </div>

      <p className="text-center text-xs font-medium text-primary/80 tracking-wider mt-8">
        with love · 2026.07.04
      </p>
    </section>
  );
}
