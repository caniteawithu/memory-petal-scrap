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

      <div className="grid grid-cols-2 gap-3 mb-8">
        <button
          onClick={share}
          className="py-3 rounded-md bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90"
        >
          카카오톡 공유
        </button>
        <button
          onClick={copyLink}
          className="py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90"
        >
          {copied ? "링크 복사됨" : "링크 복사"}
        </button>
      </div>

      <div className="flex justify-center">
        <div className="w-[180px]" style={{ transform: "rotate(-1.5deg)" }}>
          <Placeholder filename="end.png (하단 이미지)" aspect="aspect-[4/3]" />
        </div>
      </div>

      <p className="text-center text-[10px] text-muted-foreground mt-8">
        with love · 2026.07.04
      </p>
    </section>
  );
}
