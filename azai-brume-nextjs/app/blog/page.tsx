import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";
import AnimateIn from "@/components/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal, Wellness, Coffee & Movement | AZAI × BRUME",
  description:
    "Explore articles on Lagree, Pilates, recovery, specialty coffee, and the lifestyle that powers Jal El Dib's premier wellness community.",
  keywords: [
    "wellness blog Lebanon",
    "Lagree guide",
    "sauna recovery tips",
    "specialty coffee Beirut",
    "pilates vs yoga",
    "AZAI blog",
    "BRUME journal",
    "fitness tips Jal El Dib",
  ],
};

const TAG_COLORS: Record<string, string> = {
  Movement: "bg-[#C17A5E]/15 text-[#C17A5E]",
  Recovery: "bg-[#8B4A30]/15 text-[#8B4A30]",
  Coffee: "bg-[#D4A574]/15 text-[#D4A574]",
  Wellness: "bg-emerald-500/10 text-emerald-700",
  Lifestyle: "bg-violet-500/10 text-violet-700",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <main className="bg-[#FDFAF7] min-h-screen">
      {/* ── HERO ── */}
      <section className="relative bg-[#1C1210] pt-36 pb-24 overflow-hidden">
        {/* Decorative lines */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-white"
              style={{ left: `${(i + 1) * 16.6}%` }}
            />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <AnimateIn>
            <p className="font-display text-[10px] font-semibold tracking-[0.4em] uppercase text-[#C17A5E] mb-6">
             , AZAI × BRUME Journal
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-serif text-white text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-light italic leading-none mb-6">
              Stories &<br />Insights
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="font-sans text-white/50 text-base font-light max-w-xl mx-auto leading-relaxed">
              Wellness wisdom, coffee culture, and the mindset behind everything we do at AZAI and BRUME.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 -mt-1 pt-16">
        <AnimateIn>
          <p className="font-display text-[9px] font-semibold tracking-[0.4em] uppercase text-[#A08060] mb-8">
            Featured Article
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-[#1C1210] hover:shadow-2xl transition-shadow duration-500">
              {/* Image */}
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${featured.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1C1210]/60 to-transparent" />
              </div>
              {/* Text */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <span
                  className={`inline-block font-display text-[9px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6 w-fit ${
                    TAG_COLORS[featured.tag] ?? "bg-white/10 text-white/60"
                  }`}
                >
                  {featured.tag}
                </span>
                <h2 className="font-serif text-white text-3xl lg:text-4xl font-light italic leading-tight mb-5 group-hover:text-[#C17A5E] transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="font-sans text-white/50 text-sm font-light leading-relaxed mb-8">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span className="font-display text-[9px] tracking-widest uppercase text-white/30">
                    {featured.date}
                  </span>
                  <span className="w-px h-3 bg-white/20" />
                  <span className="font-display text-[9px] tracking-widest uppercase text-white/30">
                    {featured.readTime} read
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </AnimateIn>
      </section>

      {/* ── ALL POSTS ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-32">
        <AnimateIn>
          <p className="font-display text-[9px] font-semibold tracking-[0.4em] uppercase text-[#A08060] mb-10">
            All Articles
          </p>
        </AnimateIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post, i) => (
            <AnimateIn key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full">
                <div className="relative h-52 rounded-xl overflow-hidden mb-5">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute inset-0 bg-[#1C1210]/30 group-hover:bg-[#1C1210]/10 transition-colors duration-300" />
                  {/* Tag chip */}
                  <span
                    className={`absolute top-4 left-4 font-display text-[8px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full backdrop-blur-sm ${
                      TAG_COLORS[post.tag] ?? "bg-white/20 text-white"
                    }`}
                  >
                    {post.tag}
                  </span>
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="font-serif text-[#1C1210] text-xl font-light italic leading-snug mb-3 group-hover:text-[#C17A5E] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="font-sans text-[#A08060] text-sm font-light leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#1C1210]/8">
                    <span className="font-display text-[8px] tracking-widest uppercase text-[#A08060]/70">
                      {post.date}
                    </span>
                    <span className="w-px h-3 bg-[#1C1210]/15" />
                    <span className="font-display text-[8px] tracking-widest uppercase text-[#A08060]/70">
                      {post.readTime} read
                    </span>
                    <span className="ml-auto font-display text-[8px] tracking-widest uppercase text-[#C17A5E] group-hover:translate-x-1 transition-transform duration-200">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1C1210] py-24">
        <AnimateIn>
          <div className="max-w-2xl mx-auto text-center px-6">
            <p className="font-display text-[9px] font-semibold tracking-[0.4em] uppercase text-[#C17A5E] mb-6">
             , Ready to Experience It?
            </p>
            <h2 className="font-serif text-white text-4xl lg:text-5xl font-light italic mb-8">
              Come move with us.
            </h2>
            <a
              href="https://wa.me/96171607705"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#C17A5E] hover:bg-[#8B4A30] text-white font-display text-[11px] font-semibold tracking-widest uppercase px-8 py-4 rounded-full transition-colors duration-300"
            >
              Book a Class on WhatsApp
              <span>→</span>
            </a>
          </div>
        </AnimateIn>
      </section>
    </main>
  );
}
