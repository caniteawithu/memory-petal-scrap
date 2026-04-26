import { useEffect, useState } from "react";
import endImage from "@/assets/end2.png";

declare global {
  interface Window {
    Kakao?: any;
  }
}

const KAKAO_JS_KEY = ""; // 미설정 시 fallback으로 링크 복사 동작

export function FooterSection() {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    if (!KAKAO_JS_KEY) return;
    if (typeof window === "undefined") return;
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) window.Kakao.init(KAKAO_JS_KEY);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js";
    script.async = true;
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(KAKAO_JS_KEY);
      }
    };
    document.head.appendChild(script);
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  const shareKakao = async () => {
    try {
      if (window.Kakao?.Share && window.Kakao.isInitialized()) {
        window.Kakao.Share.sendDefault({
          objectType: "feed",
          content: {
            title: "구동환 ♡ 조현아 결혼합니다",
            description: "2026.07.04 토요일 · 더블유웨딩시티 5층 스위트가든홀",
            imageUrl: window.location.origin,
            link: { mobileWebUrl: window.location.href, webUrl: window.location.href },
          },
        });
        return;
      }
      // Fallback: 링크 복사
      await navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <section className="px-6 pb-12">
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

      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={copyLink}
          aria-label="링크 복사"
          title={copied ? "복사됨!" : "링크 복사"}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg shadow-[var(--shadow-soft)] hover:scale-105 active:scale-95 transition"
        >
          🔗
        </button>
        <button
          onClick={shareKakao}
          aria-label="카카오톡 공유"
          title={shared ? "복사됨!" : "카카오톡 공유"}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg shadow-[var(--shadow-soft)] hover:scale-105 active:scale-95 transition"
        >
          💬
        </button>
      </div>

      <p className="text-center text-xs font-medium text-primary/80 tracking-wider mt-8">
        with love · 2026.07.04
      </p>
    </section>
  );
}
