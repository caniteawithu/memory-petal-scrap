import { useEffect, useState } from "react";

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
      <h2 className="section-title mb-2">방명록</h2>
      <p className="text-center text-2xl mb-5" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.1em", color: "var(--accent)" }}>
        guest book
      </p>

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
          className="w-full py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90"
        >
          남기기
        </button>
      </form>

      {messages.length === 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-sm shadow-[var(--shadow-soft)]"
              style={{
                background: POSTIT_VARS[i],
                transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
              }}
            />
          ))}
        </div>
      ) : (
        <div className="columns-2 gap-3 [column-fill:_balance]">
          {messages.map((m, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-3 p-3 rounded-sm shadow-[var(--shadow-soft)]"
              style={{
                background: POSTIT_VARS[m.color_index],
                transform: `rotate(${(i % 5) - 2}deg)`,
              }}
            >
              <p className="text-xs text-foreground/85 leading-relaxed whitespace-pre-wrap" style={{ fontFamily: "var(--font-serif)" }}>
                {m.content}
              </p>
              <p className="mt-2 text-[10px] text-foreground/60 text-right">— {m.author}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
