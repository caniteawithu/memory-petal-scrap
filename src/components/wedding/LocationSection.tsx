import mapImage from "@/assets/map.png";

export function LocationSection() {
  return (
    <section className="px-6">
      <h2 className="section-title mb-6">🚌 오시는 길</h2>

      <div className="mb-5 -mx-6">
        <img
          src={mapImage}
          alt="약도"
          className="block w-full h-auto select-none pointer-events-none"
          draggable={false}
          loading="lazy"
        />
      </div>

      <div
        className="text-center text-sm text-foreground/85 leading-[1.9] whitespace-pre-line"
        style={{ fontFamily: "var(--font-serif)" }}
      >
{`부산광역시 부산진구 자유평화로 11 (구. 누리엔)
더블유웨딩시티 5층 스위트가든홀 (Tel. 051-863-8282)
🚃 범일역 1호선 10번 출구에서 도보 5분
🚗 건물 지하 주차장 이용 가능 (주차요원의 안내를 받으세요.)`}
      </div>
    </section>
  );
}
