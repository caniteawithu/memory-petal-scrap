import { useState } from "react";
import { ContactModal } from "./ContactModal";

export function ContactSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-6">
      <div
        className="text-left text-base text-foreground/85 leading-[2.1] mb-6"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        <p className="text-center">
          <span className="text-primary">구자홍</span>
          <span className="mx-1.5 text-accent">·</span>
          <span className="text-primary">김민손</span>
          <span className="text-foreground/70">의 아들</span>
          <span className="ml-2 font-semibold text-foreground">구동환</span>
        </p>
        <p className="text-center">
          <span className="invisible">구자홍 ·{" "}</span>
          <span className="text-primary">이명화</span>
          <span className="text-foreground/70">의&nbsp;&nbsp;&nbsp;딸</span>
          <span className="ml-2 font-semibold text-foreground">조현아</span>
        </p>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="w-full py-3 rounded-md bg-accent text-accent-foreground text-base font-bold hover:bg-accent/90 active:scale-[0.98] transition inline-flex items-center justify-center gap-2"
      >
        <span className="text-sm">🤍 축하 연락하기 🤍</span>
      </button>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
