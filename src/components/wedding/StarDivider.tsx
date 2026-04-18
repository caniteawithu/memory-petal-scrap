export function StarDivider() {
  return (
    <div className="star-divider" aria-hidden="true">
      <Star />
      <Star small />
      <Star />
    </div>
  );
}

function Star({ small = false }: { small?: boolean }) {
  const size = small ? 8 : 12;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61z" />
    </svg>
  );
}
