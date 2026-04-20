import { useEffect, useState } from "react";
import guestTitle from "@/assets/guest.png";

type Message = {
  author: string;
  content: string;
  color_index: number;
  createdAt: string;
};

const STORAGE_KEY = "guestbook_messages";
const POSTIT_VARS = [
  "var(--postit-1)",
  "var(--postit-2)",
  "var(--postit-3)",
  "var(--postit-4)",
  "var(--postit-5)",
  "var(--postit-6)",
];

export function GuestbookSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setMessages(stored);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;
    const msg: Message = {
      author: author.trim().slice(0, 20),
      content: content.trim().slice(0, 200),
      color_index: Math.floor(Math.random() * 6),
      createdAt: new Date().toISOString(),
    };
    const next = [msg, ...messages];
    setMessages(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setAuthor("");
    setContent("");
  };

  return (
    <section className="px-6">
      <div className="flex justify-center mb-5">
        <div className="w-[200px]">
          <img
            src={guestTitle}
            alt="guest book"
            className="w-full h-auto select-none pointer-events-none"
            draggable={false}
          />
        </div>
      </div>

      <form onSubmit={submit} className="space-y-2 mb-5">
        <div className="grid grid-cols-3 gap-2">
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="이름"
            maxLength={20}
            className="col-span-1 px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="축하 메시지를 남겨주세요"
            maxLength={200}
            className="col-span-2 px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-accent text-accent-foreground text-base font-medium hover:bg-accent/90 text-center"
        >
          축하 메시지 남기기🐾
        </button>
      </form>

      {(() => {
        const tapeVariants = ["", "tape-left", "tape-right", "tape-gray", "tape-yellow"];
        const rotations = [-2, 1.5, -1, 2, -1.5, 1];
        if (messages.length === 0) {
          return (
            <div className="grid grid-cols-2 gap-4 gap-y-6 pt-3">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`paper-note aspect-square ${tapeVariants[i % tapeVariants.length]}`}
                  style={{
                    backgroundColor: POSTIT_VARS[i],
                    transform: `rotate(${rotations[i % rotations.length]}deg)`,
                  }}
                />
              ))}
            </div>
          );
        }
        return (
          <div className="columns-2 gap-4 [column-fill:_balance] pt-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`paper-note break-inside-avoid mb-5 ${tapeVariants[i % tapeVariants.length]}`}
                style={{
                  backgroundColor: POSTIT_VARS[m.color_index],
                  transform: `rotate(${rotations[i % rotations.length]}deg)`,
                }}
              >
                <p className="text-sm text-foreground/85 leading-relaxed whitespace-pre-wrap">
                  {m.content}
                </p>
                <p className="mt-2 text-[11px] text-foreground/60 text-right">— {m.author}</p>
              </div>
            ))}
          </div>
        );
      })()}
    </section>
  );
}
