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
          <span className="text-foreground/70 text-right">의 장남</span>
          <span className="font-semibold text-foreground mx-[7px] mr-0 ml-[9px]">구동환            </span>
        </p>
        <p className="text-center">
          <span className="invisible">구자홍 ·{" "}</span>
          <span className="text-primary mx-[96px] mr-0 ml-[5px]"> 이명화</span>
          <span className="text-foreground/70 text-right mr-0">의  장녀</span>
          <span className="font-semibold text-foreground text-center mr-0 mx-[12px] ml-[12px]">조현아</span>
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
