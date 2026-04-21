export function LocationSection() {
  const address = "부산 부산진구 자유평화로 11";
  const mapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(address)}`;

  return (
    <section className="px-6">
      <h2 className="section-title mb-6">🚌 오시는 길</h2>

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
        className="block w-full text-center py-3 bg-accent text-white hover:bg-accent/90 active:scale-[0.98] transition font-bold text-sm"
        style={{ borderRadius: "12px" }}
      >
        📍 카카오맵으로 위치 보기
      </a>
    </section>
  );
}
