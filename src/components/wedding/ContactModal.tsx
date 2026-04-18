import { BottomSheet } from "./BottomSheet";

type Person = { role: string; name: string; phone: string };

const groom: Person[] = [
  { role: "신랑", name: "구동환", phone: "010-6507-3885" },
  { role: "아버지", name: "구자홍", phone: "010-3553-3857" },
  { role: "어머니", name: "김민손", phone: "010-3404-3881" },
];

const bride: Person[] = [
  { role: "신부", name: "조현아", phone: "010-6402-4327" },
  { role: "어머니", name: "이명화", phone: "010-2911-4327" },
];

function PersonCard({ p }: { p: Person }) {
  const tel = p.phone.replace(/-/g, "");
  return (
    <div className="py-3 border-b border-border/50 last:border-0">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-xs text-muted-foreground">{p.role}</span>
      </div>
      <p className="text-sm text-foreground font-medium mb-2">{p.name || "—"}</p>
      <div className="flex gap-1.5">
        <a
          href={`tel:${tel}`}
          className="flex-1 text-center py-1.5 rounded text-xs bg-primary/10 text-primary hover:bg-primary/15"
        >
          전화
        </a>
        <a
          href={`sms:${tel}`}
          className="flex-1 text-center py-1.5 rounded text-xs bg-accent/15 text-accent hover:bg-accent/25"
        >
          문자
        </a>
      </div>
    </div>
  );
}

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <BottomSheet open={open} onClose={onClose} title="연락처">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-bold text-primary mb-2 text-center">신랑측</h4>
          {groom.map((p, i) => (
            <PersonCard key={i} p={p} />
          ))}
        </div>
        <div>
          <h4 className="text-sm font-bold text-primary mb-2 text-center">신부측</h4>
          {bride.map((p, i) => (
            <PersonCard key={i} p={p} />
          ))}
        </div>
      </div>
    </BottomSheet>
  );
}
