import AnimateIn from "@/components/AnimateIn";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roadmap: What's Coming Next | AZAI × BRUME",
  description:
    "A transparent look at the features and improvements planned for the AZAI × BRUME website. Everything we're building, what's launched, and what's on the horizon.",
};

type Status = "live" | "next" | "planned" | "considering";

interface RoadmapItem {
  title: string;
  description: string;
  status: Status;
  category: string;
  eta?: string;
}

const STATUS_CONFIG: Record<Status, { label: string; color: string; dot: string; bg: string }> = {
  live: {
    label: "Live",
    color: "text-emerald-700",
    dot: "bg-emerald-400",
    bg: "bg-emerald-50 border-emerald-200/60",
  },
  next: {
    label: "Up Next",
    color: "text-[#C17A5E]",
    dot: "bg-[#C17A5E]",
    bg: "bg-[#C17A5E]/5 border-[#C17A5E]/20",
  },
  planned: {
    label: "Planned",
    color: "text-violet-700",
    dot: "bg-violet-400",
    bg: "bg-violet-50/80 border-violet-200/60",
  },
  considering: {
    label: "Considering",
    color: "text-[#A08060]",
    dot: "bg-[#A08060]/50",
    bg: "bg-[#F9F0E8]/80 border-[#A08060]/20",
  },
};

const ROADMAP: RoadmapItem[] = [
  // ── LIVE ──
  {
    title: "Branded Website Launch",
    description: "Full dual-brand website for AZAI (wellness studio) and BRUME (coffee bar) with dedicated pages, brand identity, and cinematic animations.",
    status: "live",
    category: "Foundation",
  },
  {
    title: "WhatsApp Booking Integration",
    description: "All booking CTAs throughout the site route to WhatsApp with pre-filled messages. Fast, friction-free, and familiar for Lebanese audiences.",
    status: "live",
    category: "Booking",
  },
  {
    title: "SEO Blog / Journal",
    description: "Keyword-optimized blog covering wellness, coffee, and lifestyle topics to drive organic search traffic in Lebanon and the region.",
    status: "live",
    category: "Content & SEO",
  },
  {
    title: "Split Dual-Brand Hero",
    description: "Interactive cinematic hero with spring physics, hover to expand either AZAI or BRUME side, with animated titles, overlays, and CTAs.",
    status: "live",
    category: "Design",
  },
  {
    title: "Contact Page",
    description: "Full contact page with Google Maps embed, social links, quick action cards, and a WhatsApp-powered enquiry form.",
    status: "live",
    category: "Foundation",
  },

  // ── UP NEXT ──
  {
    title: "Real Photography Integration",
    description: "Replace Unsplash placeholders with actual AZAI studio photos and BRUME café imagery. Professional shoot recommended for the hero, services, and blog.",
    status: "next",
    category: "Content & SEO",
    eta: "When photos are ready",
  },
  {
    title: "Google Analytics + Meta Pixel",
    description: "Track visitor behavior, traffic sources, and conversion events. Essential for understanding which classes and content drive bookings.",
    status: "next",
    category: "Analytics",
    eta: "Q2 2025",
  },
  {
    title: "Individual Blog Post Pages",
    description: "Each blog article gets its own full page with rich layout, author info, related posts, and inline WhatsApp CTA. Currently only listing page is live.",
    status: "next",
    category: "Content & SEO",
    eta: "Q2 2025",
  },

  // ── PLANNED ──
  {
    title: "Online Class Booking System",
    description: "Native booking calendar with class schedules, instructor names, and available spots. Likely via Mindbody, Pike13, or a custom Calendly embed.",
    status: "planned",
    category: "Booking",
    eta: "Phase 2",
  },
  {
    title: "Online Payments",
    description: "Pay for classes, memberships, and packages directly on the website. Requires payment gateway integration (Stripe, Paymob, or Lebanese payment processor).",
    status: "planned",
    category: "Payments",
    eta: "Phase 2",
  },
  {
    title: "Member Portal",
    description: "Secure login area for members to view their upcoming classes, booking history, membership status, and wellness progress.",
    status: "planned",
    category: "Membership",
    eta: "Phase 2",
  },
  {
    title: "Arabic Language Toggle",
    description: "Full Arabic translation of all website content with RTL layout support. Enables reaching a broader local Lebanese audience.",
    status: "planned",
    category: "Localization",
    eta: "Phase 2",
  },
  {
    title: "Gift Card E-Commerce",
    description: "Purchase and send AZAI or BRUME gift cards digitally. Ideal for holidays, birthdays, and gifting wellness experiences.",
    status: "planned",
    category: "E-Commerce",
    eta: "Phase 2",
  },

  // ── CONSIDERING ──
  {
    title: "Loyalty & Points Program",
    description: "Reward returning members with points for classes, purchases, and referrals. Redeemable for classes, BRUME credits, or merch.",
    status: "considering",
    category: "Membership",
  },
  {
    title: "Instructor Profile Pages",
    description: "Dedicated pages for each AZAI instructor with their bio, specialties, class schedule, and personal story. Builds community and trust.",
    status: "considering",
    category: "Content & SEO",
  },
  {
    title: "BRUME Online Menu / Ordering",
    description: "Digital menu with allergen information, pricing, and possible pre-order capability for coffee and food to pick up in-studio.",
    status: "considering",
    category: "BRUME",
  },
  {
    title: "WhatsApp Chatbot",
    description: "Automated WhatsApp bot to answer FAQs, share class schedules, and collect booking requests, reducing manual response time.",
    status: "considering",
    category: "Booking",
  },
  {
    title: "Merch Store",
    description: "Online store for branded AZAI × BRUME merchandise: towels, bottles, tote bags, apparel. Builds brand identity beyond the studio.",
    status: "considering",
    category: "E-Commerce",
  },
  {
    title: "App (iOS / Android)",
    description: "Native mobile app for class bookings, schedules, push notifications, and loyalty tracking. Requires significant investment, Phase 3+.",
    status: "considering",
    category: "Mobile",
  },
];

const CATEGORIES = [...new Set(ROADMAP.map((r) => r.category))];

export default function RoadmapPage() {
  const liveItems = ROADMAP.filter((r) => r.status === "live");
  const nextItems = ROADMAP.filter((r) => r.status === "next");
  const plannedItems = ROADMAP.filter((r) => r.status === "planned");
  const consideringItems = ROADMAP.filter((r) => r.status === "considering");

  const sections: { status: Status; label: string; items: RoadmapItem[]; desc: string }[] = [
    { status: "live", label: "Launched", items: liveItems, desc: "Features that are live on the website right now." },
    { status: "next", label: "Up Next", items: nextItems, desc: "The next batch of improvements in active planning." },
    { status: "planned", label: "Phase 2", items: plannedItems, desc: "Confirmed features for the next major phase of development." },
    { status: "considering", label: "On the Radar", items: consideringItems, desc: "Ideas we love but haven't committed to yet. Input welcome." },
  ];

  return (
    <main className="bg-[#FDFAF7] min-h-screen">
      {/* ── HERO ── */}
      <section className="relative bg-[#1C1210] pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-px bg-white" style={{ left: `${(i + 1) * 16.6}%` }} />
          ))}
        </div>
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <p className="font-display text-[10px] font-semibold tracking-[0.4em] uppercase text-[#C17A5E] mb-6">
             , Product Roadmap
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-serif text-white text-6xl lg:text-9xl font-light italic leading-none mb-8">
              What We're<br />Building
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="font-sans text-white/50 text-base font-light max-w-2xl leading-relaxed">
              This is our living roadmap, a transparent look at what's live, what's coming, and what we're thinking about.
              We share this because building in public builds trust.
            </p>
          </AnimateIn>

          {/* Stats */}
          <AnimateIn delay={0.3}>
            <div className="flex flex-wrap gap-8 mt-12">
              {[
                { n: liveItems.length, label: "Features Live" },
                { n: nextItems.length + plannedItems.length, label: "In the Pipeline" },
                { n: consideringItems.length, label: "Being Evaluated" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-white text-4xl font-light italic">{s.n}</p>
                  <p className="font-display text-[9px] tracking-widest uppercase text-white/40 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── LEGEND ── */}
      <section className="border-b border-[#1C1210]/8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-wrap gap-6">
          {(Object.entries(STATUS_CONFIG) as [Status, typeof STATUS_CONFIG[Status]][]).map(([, cfg]) => (
            <div key={cfg.label} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
              <span className={`font-display text-[9px] font-semibold tracking-widest uppercase ${cfg.color}`}>
                {cfg.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTIONS ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 space-y-20">
        {sections.map(({ status, label, items, desc }) => {
          const cfg = STATUS_CONFIG[status];
          return (
            <div key={status}>
              <AnimateIn>
                <div className="flex items-center gap-4 mb-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${cfg.dot} flex-shrink-0`} />
                  <h2 className="font-serif text-[#1C1210] text-3xl font-light italic">{label}</h2>
                  <span className={`font-display text-[8px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full border ${cfg.bg} ${cfg.color}`}>
                    {items.length} items
                  </span>
                </div>
                <p className="font-sans text-[#A08060] text-sm font-light ml-6.5 mb-10">{desc}</p>
              </AnimateIn>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((item, i) => (
                  <AnimateIn key={item.title} delay={i * 0.06}>
                    <div className={`rounded-xl p-6 border h-full flex flex-col ${cfg.bg}`}>
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <span className={`font-display text-[8px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/60 border border-[#1C1210]/8 text-[#A08060]`}>
                          {item.category}
                        </span>
                        {item.eta && (
                          <span className="font-display text-[8px] tracking-widest uppercase text-[#A08060]/70 flex-shrink-0">
                            {item.eta}
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-[#1C1210] text-lg font-light italic leading-snug mb-3">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[#6B4F3A] text-sm font-light leading-relaxed flex-1">
                        {item.description}
                      </p>

                      {/* Status badge */}
                      <div className="flex items-center gap-2 mt-5 pt-4 border-t border-[#1C1210]/8">
                        <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                        <span className={`font-display text-[8px] font-semibold tracking-widest uppercase ${cfg.color}`}>
                          {cfg.label}
                        </span>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1C1210] py-24">
        <AnimateIn>
          <div className="max-w-2xl mx-auto text-center px-6">
            <p className="font-display text-[10px] font-semibold tracking-[0.4em] uppercase text-[#C17A5E] mb-6">
             , Have a Feature Request?
            </p>
            <h2 className="font-serif text-white text-4xl lg:text-5xl font-light italic mb-5">
              Tell us what you need.
            </h2>
            <p className="font-sans text-white/50 text-sm font-light max-w-md mx-auto leading-relaxed mb-10">
              We build this for you, the AZAI members and BRUME regulars. If something's missing, let us know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/96171607705"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#C17A5E] hover:bg-[#8B4A30] text-white font-display text-[11px] font-semibold tracking-widest uppercase px-8 py-4 rounded-full transition-colors duration-300"
              >
                Send Feedback on WhatsApp →
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-white/50 text-white font-display text-[11px] font-semibold tracking-widest uppercase px-8 py-4 rounded-full transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>
    </main>
  );
}
