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
        className="block w-full text-center py-3 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.98] transition font-bold text-sm"
      >
        길찾기
      </a>
    </section>
  );
}
