import { createFileRoute } from "@tanstack/react-router";
import { IntroSection } from "@/components/wedding/IntroSection";
import { CalendarSection } from "@/components/wedding/CalendarSection";
import { GallerySection } from "@/components/wedding/GallerySection";
import { LocationSection } from "@/components/wedding/LocationSection";
import { AccountSection } from "@/components/wedding/AccountSection";
import { RsvpSection } from "@/components/wedding/RsvpSection";
import { GuestbookSection } from "@/components/wedding/GuestbookSection";
import { FooterSection } from "@/components/wedding/FooterSection";
import { StarDivider } from "@/components/wedding/StarDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "구동환 ♡ 조현아 결혼합니다 | 2026.07.04" },
      { name: "description", content: "2026년 7월 4일, 더블유웨딩시티 5층 스위트가든홀에서 구동환 ♡ 조현아의 결혼식을 안내합니다." },
      { property: "og:title", content: "구동환 ♡ 조현아 결혼합니다" },
      { property: "og:description", content: "2026.07.04 토요일 오후 12시 30분 · 더블유웨딩시티" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: WeddingInvitation,
});

function WeddingInvitation() {
  return (
    <main className="min-h-screen bg-background">
      <article className="invitation-shell">
        <IntroSection />
        <StarDivider />
        <CalendarSection />
        <StarDivider />
        <GallerySection />
        <StarDivider />
        <LocationSection />
        <StarDivider />
        <AccountSection />
        <StarDivider />
        <RsvpSection />
        <StarDivider />
        <GuestbookSection />
        <StarDivider />
        <FooterSection />
      </article>
    </main>
  );
}
