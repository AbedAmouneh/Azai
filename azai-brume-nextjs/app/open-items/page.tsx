import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Items | AZAI × BRUME",
  description: "A look at what we can build next for AZAI and BRUME — from online booking to a full mobile app.",
};

const GOALS = [
  {
    number: "01",
    goal: "Fill Every Class",
    tagline: "Remove every point of friction between a person and a booking.",
    color: "#C17A5E",
    items: [
      {
        name: "Online Booking System",
        benefit: "Let clients book instantly, 24 hours a day, without WhatsApp friction.",
        description:
          "A real-time class calendar where members browse available sessions, choose their instructor, and reserve their spot in under 30 seconds. Capacity-aware, synced with your schedule, and cancelation-friendly.",
      },
      {
        name: "Online Payments & Class Packs",
        benefit: "Collect revenue before clients walk through the door.",
        description:
          "Sell single sessions, 5- and 10-class packs, and unlimited memberships directly through the site. Stripe-powered checkout with automatic receipts and instant confirmation.",
      },
      {
        name: "Push Notifications & SMS Reminders",
        benefit: "Reduce no-shows and keep AZAI top of mind between visits.",
        description:
          "Automated reminders fire 24 hours and 2 hours before class. Waitlist alerts notify members the moment a spot opens. Promotional messages go out for new class launches or schedule changes.",
      },
    ],
  },
  {
    number: "02",
    goal: "Keep Them Coming Back",
    tagline: "Turn one-time visitors into a community that stays.",
    color: "#8B4A30",
    items: [
      {
        name: "Loyalty & Points Program",
        benefit: "Reward the behavior you want more of.",
        description:
          "Members earn points for every class attended, every referral sent, and every visit to BRUME. Points unlock perks: priority booking windows, discounts, free sessions, and exclusive early access to new offerings.",
      },
      {
        name: "Member Portal",
        benefit: "Give members a reason to return to the site between classes.",
        description:
          "A personal dashboard where each member sees their class history, remaining credits, loyalty points balance, and upcoming bookings. Simple, private, and branded to feel like part of AZAI.",
      },
      {
        name: "Gift Card E-Commerce",
        benefit: "Your members become your best sales channel.",
        description:
          "Digital gift cards purchasable directly on the site in any denomination. Delivered instantly by email. Perfect for birthdays, milestone gifts, and the gifting season — a revenue stream that requires zero ongoing effort.",
      },
    ],
  },
  {
    number: "03",
    goal: "Grow Your Reach",
    tagline: "Put AZAI and BRUME in front of the audiences you haven't met yet.",
    color: "#D4A574",
    items: [
      {
        name: "Arabic Language Toggle",
        benefit: "Reach the full Lebanese market, not just English speakers.",
        description:
          "A one-click switch between English and Arabic with a fully RTL-aware layout. Every page, every button, every service description reads naturally in both directions — no awkward mirroring or translation shortcuts.",
      },
      {
        name: "Mobile App — iOS & Android",
        benefit: "AZAI and BRUME in every pocket, always one tap away.",
        description:
          "A branded native app with class booking, the BRUME menu, loyalty point tracking, push notifications, and your Instagram feed. Listed on the App Store and Google Play under your brand.",
      },
      {
        name: "Live Instagram Feed",
        benefit: "Your content keeps working long after you post it.",
        description:
          "Real photos and videos from @azaiexperience and @brumecoffeebar displayed live on the site. Always fresh, always visual, and no extra effort — the feed updates itself whenever you post.",
      },
    ],
  },
  {
    number: "04",
    goal: "Get Found Online",
    tagline: "Build the infrastructure that brings new clients to you organically.",
    color: "#6B4F3A",
    items: [
      {
        name: "Meta Pixel & Analytics",
        benefit: "Know exactly who your audience is and where they come from.",
        description:
          "Facebook and Instagram Pixel integration for ad retargeting — so anyone who visits the site sees your ads follow them. Paired with Google Analytics to track page views, booking conversions, and campaign performance with full clarity.",
      },
      {
        name: "Expanded Blog & Content Marketing",
        benefit: "Rank on Google and become the authority on wellness in Jal El Dib.",
        description:
          "A full editorial system with categories, tags, SEO-optimized article templates, and an email subscriber list. Articles about Lagree, recovery, specialty coffee, and the AZAI lifestyle find new clients through search — without spending on ads.",
      },
    ],
  },
];

export default function OpenItemsPage() {
  return (
    <main className="bg-[#FDFAF7] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative bg-[#1C1210] pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-px bg-white" style={{ left: `${(i + 1) * 11.1}%` }} />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#C17A5E]/6 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#D4A574]/5 blur-[100px]" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <p className="font-display text-[10px] font-semibold tracking-[0.4em] uppercase text-[#C17A5E] mb-6">
              AZAI × BRUME — Open Items
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-serif text-white text-4xl sm:text-6xl lg:text-8xl font-light italic leading-tight mb-8">
              What we can<br />build next.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="font-sans text-white/50 text-base font-light max-w-2xl leading-relaxed mb-10">
              The site you are looking at is the foundation. Below is everything it can grow into — organized by what each feature does for your business, not just what it is.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="flex flex-wrap gap-3">
              {["11 features", "4 business goals", "One team"].map((pill) => (
                <span key={pill} className="font-display text-[9px] font-semibold tracking-widest uppercase text-white/40 border border-white/10 px-4 py-2 rounded-full">
                  {pill}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── GOAL GROUPS ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 space-y-28">
        {GOALS.map((group, gi) => (
          <AnimateIn key={group.number}>
            <div>
              {/* Group header */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8 mb-12 pb-6 border-b border-[#1C1210]/8">
                <span className="font-serif font-light italic leading-none" style={{ fontSize: "clamp(56px, 8vw, 96px)", color: group.color, opacity: 0.15 }}>
                  {group.number}
                </span>
                <div className="sm:mb-2">
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1C1210] italic mb-2">{group.goal}</h2>
                  <p className="font-sans text-sm font-light text-[#A08060] max-w-xl">{group.tagline}</p>
                </div>
              </div>

              {/* Feature cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((item, ii) => (
                  <AnimateIn key={item.name} delay={ii * 0.08}>
                    <div className="group bg-white rounded-2xl p-7 border border-[#1C1210]/6 hover:border-[#C17A5E]/20 hover:shadow-xl transition-all duration-400 flex flex-col h-full">
                      <div className="w-1 h-6 rounded-full mb-6 flex-shrink-0" style={{ backgroundColor: group.color }} />
                      <h3 className="font-display text-xs font-semibold tracking-widest uppercase text-[#1C1210] mb-3">{item.name}</h3>
                      <p className="font-serif text-base font-light italic text-[#1C1210] leading-snug mb-4">{item.benefit}</p>
                      <p className="font-sans text-[13px] font-light text-[#A08060] leading-relaxed flex-1">{item.description}</p>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* ── WHAT YOU ALREADY HAVE ── */}
      <section className="bg-[#F9F0E8] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#C17A5E] mb-4">Already live</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#1C1210] italic">What's already built.</h2>
              <p className="font-sans text-sm font-light text-[#A08060] mt-4 max-w-lg mx-auto">
                This is what you're looking at right now — a fully designed, deployed, and mobile-optimized dual-brand website.
              </p>
            </div>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "7 Pages", detail: "Home, AZAI, BRUME, Blog, Contact, Blog articles, Roadmap" },
              { label: "Real Photos", detail: "28 AZAI + 10 BRUME images from Instagram, placed by context" },
              { label: "WhatsApp Booking", detail: "Every CTA routes directly to your WhatsApp with a pre-filled message" },
              { label: "Mobile Optimized", detail: "Responsive across every screen size, tested at 375px and up" },
              { label: "SEO Ready", detail: "Metadata, Open Graph, sitemap.xml and robots.txt all configured" },
              { label: "6 Blog Articles", detail: "Full editorial content covering Lagree, sauna, coffee, yoga, HIIT" },
              { label: "Framer Motion", detail: "Spring animations on every section — nothing is static" },
              { label: "Vercel Deploy", detail: "Live on the internet, globally distributed, zero downtime" },
            ].map((item, i) => (
              <AnimateIn key={item.label} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-5 border border-[#F9F0E8]">
                  <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#C17A5E] mb-2">{item.label}</p>
                  <p className="font-sans text-xs font-light text-[#6B4F3A] leading-relaxed">{item.detail}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1C1210] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateIn>
            <p className="font-display text-[10px] font-semibold tracking-[0.4em] uppercase text-[#C17A5E] mb-6">
              Let's talk
            </p>
            <h2 className="font-serif text-white text-4xl sm:text-5xl font-light italic mb-6">
              Which ones matter most to you?
            </h2>
            <p className="font-sans text-white/50 text-base font-light max-w-md mx-auto mb-10 leading-relaxed">
              Every feature above is something we can scope, price, and build. Message us and we will walk you through what makes sense for where AZAI is right now.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#C17A5E] hover:bg-[#8B4A30] text-white font-display text-[11px] font-semibold tracking-widest uppercase px-9 py-4 rounded-full transition-colors duration-300"
            >
              Discuss on WhatsApp →
            </a>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
