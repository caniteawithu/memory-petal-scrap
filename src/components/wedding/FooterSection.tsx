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
      setTimeout(() => setCopied(false), 1800);
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
      // Fallback: Web Share API → 링크 복사
      if (navigator.share) {
        await navigator.share({
          title: "구동환 ♡ 조현아 결혼합니다",
          text: "2026.07.04 토요일 · 더블유웨딩시티 5층 스위트가든홀",
          url: window.location.href,
        });
        return;
      }
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
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

      <p
        className="text-center text-sm text-foreground/85 leading-[2] mt-6 whitespace-pre-line"
        style={{ fontFamily: "var(--font-serif)" }}
      >
{`축하해 주시는 모든 분들께
진심으로 감사드립니다.

건강하고 행복하세요!

구동환 그리고 조현아 드림 💛`}
      </p>

      <div className="flex flex-col gap-3 mt-8">
        <button
          onClick={shareKakao}
          className="w-full py-3.5 px-5 rounded-md flex items-center justify-between text-sm active:scale-[0.99] transition bg-[#799d43] text-slate-100 font-semibold text-center"
        >
          <span className="text-center">카카오톡으로 청첩장 전하기</span>
          <span aria-hidden className="text-base">​💬</span>
        </button>
        <button
          onClick={copyLink}
          className="w-full py-3.5 px-5 rounded-md flex items-center justify-between text-sm text-white active:scale-[0.99] transition bg-[#6e5a49] font-semibold"
        >
          <span>{copied ? "주소가 복사되었습니다" : "청첩장 주소 복사하기"}</span>
          <span aria-hidden className="text-base">​🔗</span>
        </button>
      </div>

      <p className="text-center text-xs font-medium text-primary/80 tracking-wider mt-8">
        with love · 2026.07.04
      </p>
    </section>
  );
}
