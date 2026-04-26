import { useState } from "react";

const ADDRESS = "부산광역시 부산진구 자유평화로 11";
const VENUE_TEL = "051-863-8282";

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  const kakaoMapUrl =
    "https://map.kakao.com/link/search/" +
    encodeURIComponent("부산광역시 부산진구 자유평화로 11 W웨딩시티");

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <section className="px-6">
      <h2 className="section-title mb-6">🚌 오시는 길 안내</h2>

      <div
        className="text-left text-sm text-foreground/85 leading-[1.9]"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {/* 장소 */}
        <div className="pb-4 border-b border-border/50">
          <div className="flex items-center justify-between gap-3">
            <p className="font-semibold text-foreground">
              더블유웨딩시티 5층 스위트가든홀
            </p>
            <a
              href={`tel:${VENUE_TEL.replace(/-/g, "")}`}
              aria-label="전화 걸기"
              className="shrink-0 text-xs px-2.5 py-1.5 rounded bg-accent/15 text-accent hover:bg-accent/25 inline-flex items-center gap-1"
            >
              📞
            </a>
          </div>
          <div className="mt-2 flex items-center justify-between gap-3">
            <p className="text-foreground/80">{ADDRESS}</p>
            <button
              onClick={copyAddress}
              aria-label="주소 복사"
              className="shrink-0 text-xs px-2.5 py-1.5 rounded bg-accent/15 text-accent hover:bg-accent/25 inline-flex items-center gap-1"
            >
              {copied ? "복사됨" : "복사"}
            </button>
          </div>
          <div className="mt-3 overflow-hidden rounded-md border border-border/50">
            <iframe
              src="https://map.kakao.com/?urlX=476795&urlY=1097643&urlLevel=3&map_type=TYPE_MAP&map_attribute=ROADVIEW&itemId=&q=%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%B6%80%EC%82%B0%EC%A7%84%EA%B5%AC%20%EC%9E%90%EC%9C%A0%ED%8F%89%ED%99%94%EB%A1%9C%2011"
              title="더블유웨딩시티 위치"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

        {/* 자차 */}
        <div className="py-4 border-b border-border/50">
          <p className="font-semibold text-primary mb-1.5">🚗 자차</p>
          <p className="text-foreground/80">
            더블유웨딩시티 건물 지하 주차장 이용
          </p>
        </div>

        {/* 지하철 */}
        <div className="py-4 border-b border-border/50">
          <p className="font-semibold text-primary mb-1.5">🚃 지하철</p>
          <p className="text-foreground/80">1호선 범일역 10번출구 도보 5분</p>
          <p className="text-foreground/80">2호선 문현역 3번출구 도보 10분</p>
        </div>

        {/* 버스 */}
        <div className="py-4">
          <p className="font-semibold text-primary mb-1.5">🚌 버스</p>
          <p className="text-foreground/80 mb-2">
            22번, 27번, 49번, 42번, 57번, 68번, 80번 자유시장 앞 하차 후 도보 3분
          </p>
          <p className="text-foreground/80">
            5-1번, 10번, 23번, 52번, 81번, 83번, 99번, 111번, 148번 중앙시장역 하차 후 도보 7분
          </p>
        </div>
      </div>

      <a
        href={kakaoMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-full py-3 rounded-md text-base font-bold text-white active:scale-[0.98] transition inline-flex items-center justify-center gap-2"
        style={{ backgroundColor: "#7a9d44" }}
      >
        <span className="text-sm">📍 카카오맵으로 길찾기</span>
      </a>
    </section>
  );
}
