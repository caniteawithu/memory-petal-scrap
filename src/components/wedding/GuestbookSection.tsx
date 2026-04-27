import { useEffect, useMemo, useState } from "react";
import guestTitle from "@/assets/guest.png";
import { supabase } from "@/integrations/supabase/client";

type Message = {
  id: string;
  author: string;
  content: string;
  color_index: number;
  created_at: string;
};

const POSTIT_VARS = [
  "var(--postit-1)",
  "var(--postit-2)",
  "var(--postit-3)",
  "var(--postit-4)",
  "var(--postit-5)",
  "var(--postit-6)",
];

const INITIAL_VISIBLE = 6;

export function GuestbookSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isAdmin = useMemo(() => {
    if (typeof window === "undefined") return false;
    const params = new URLSearchParams(window.location.search);
    return params.get("admin") === "1234";
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase
        .from("guestbook_messages")
        .select("*")
        .order("created_at", { ascending: false });
      if (!cancelled && !error && data) {
        setMessages(data as Message[]);
      }
    })();

    const channel = supabase
      .channel("guestbook-messages-changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "guestbook_messages" },
        (payload) => {
          const m = payload.new as Message;
          setMessages((prev) =>
            prev.some((x) => x.id === m.id) ? prev : [m, ...prev]
          );
        }
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "guestbook_messages" },
        (payload) => {
          const old = payload.old as { id: string };
          setMessages((prev) => prev.filter((m) => m.id !== old.id));
        }
      )
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const a = author.trim();
    const c = content.trim();
    if (!a || !c || submitting) return;
    setSubmitting(true);
    const { error } = await supabase.from("guestbook_messages").insert({
      author: a.slice(0, 20),
      content: c.slice(0, 200),
      color_index: Math.floor(Math.random() * 4),
    });
    setSubmitting(false);
    if (!error) {
      setAuthor("");
      setContent("");
    }
  };

  const handleDelete = async (id: string) => {
    if (!isAdmin) return;
    if (!window.confirm("이 방명록을 삭제할까요?")) return;
    setMessages((prev) => prev.filter((m) => m.id !== id));
    await supabase.from("guestbook_messages").delete().eq("id", id);
  };

  const rotations = [-2, 1.5, -1, 2, -1.5, 1];
  const visibleMessages = showAll ? messages : messages.slice(0, INITIAL_VISIBLE);
  const hasMore = messages.length > INITIAL_VISIBLE;

  return (
    <section className="px-6">
      <div className="flex justify-center mb-5 text-center">
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
            type="text"
            className="col-span-1 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 px-[8px] py-[6px] font-normal text-primary placeholder:text-primary/70 text-xs text-center"
          />
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="축하 메시지를 남겨주세요"
            maxLength={200}
            type="text"
            className="col-span-2 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 px-[8px] font-normal text-center text-primary placeholder:text-primary/70 text-xs"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 text-center text-sm font-bold disabled:opacity-60"
        >
          축하 메시지 남기기 🐾
        </button>
      </form>

      {messages.length > 0 && (
        <>
          <div className="columns-2 gap-4 [column-fill:_balance] pt-3">
            {visibleMessages.map((m, i) => (
              <div
                key={m.id}
                className="paper-note break-inside-avoid mb-5 relative"
                style={{
                  backgroundColor: POSTIT_VARS[m.color_index],
                  transform: `rotate(${rotations[i % rotations.length]}deg)`,
                }}
              >
                {isAdmin && (
                  <button
                    type="button"
                    onClick={() => handleDelete(m.id)}
                    aria-label="메시지 삭제"
                    className="absolute top-1 right-1.5 w-5 h-5 flex items-center justify-center text-foreground/40 hover:text-foreground/80 text-xs leading-none"
                  >
                    ×
                  </button>
                )}
                <p className="text-sm text-foreground/85 leading-relaxed whitespace-pre-wrap">
                  {m.content}
                </p>
                <p className="mt-2 text-foreground/60 text-right text-xs font-medium">— {m.author}</p>
              </div>
            ))}
          </div>

          {hasMore && !showAll && (
            <div className="flex justify-center mt-3">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="px-5 py-2 rounded-md border border-input bg-background text-foreground/80 hover:bg-accent/10 text-xs font-semibold"
              >
                더보기
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
