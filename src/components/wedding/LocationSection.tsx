export function LocationSection() {
  const address = "부산광역시 부산진구 자유평화로 11 W웨딩시티 5층";
  const mapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(address)}`;

  return (
    <section className="px-6">
      <h2 className="section-title mb-6">🚌 오시는 길</h2>

      {/* Map placeholder */}
      <div className="rounded-md overflow-hidden shadow-[var(--shadow-paper)] mb-4 border border-border/60">
        <div className="placeholder-box" style={{ aspectRatio: "16/10", borderRadius: 0, border: "none" }}>
          <span>kakao_map.png (지도 영역)</span>
        </div>
      </div>

      <div className="text-center space-y-1 mb-4" style={{ fontFamily: "var(--font-serif)" }}>
        <p className="text-sm font-bold text-primary">W웨딩시티 5층 스위트가든홀</p>
        <p className="text-xs text-foreground/80">
          부산광역시 부산진구 자유평화로 11<br />
          (구. 누리엔)
        </p>
      </div>

      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-3 rounded-md bg-accent text-accent-foreground text-base font-medium hover:bg-accent/90 active:scale-[0.98] transition"
      >
        길찾기
      </a>

      <div className="mt-5 space-y-3 text-sm text-foreground/85 leading-[1.85] text-center">
        <p>1호선 범일역 10번 출구에서 평화시장 지나 도보 5분</p>
        <p>자차 이용 시, 건물 주차장 이용 가능합니다.</p>
        <p>건물 주차 혼잡하고 지하철이 가까우니<br />대중교통 이용을 권장 드립니다.</p>
      </div>
    </section>
  );
}
