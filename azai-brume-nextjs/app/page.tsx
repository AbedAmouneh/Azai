import SplitHero from "@/components/SplitHero";
import AnimateIn from "@/components/AnimateIn";
import Marquee from "@/components/Marquee";
import Link from "next/link";
import { IMAGES, TESTIMONIALS, BLOG_POSTS, WHATSAPP_URL } from "@/lib/constants";

const marqueeItems = [
  { text: "LAGREE" }, { text: "×", accent: true },
  { text: "REFORMER" }, { text: "×", accent: true },
  { text: "HOT SCULPT" }, { text: "×", accent: true },
  { text: "YOGA" }, { text: "×", accent: true },
  { text: "SAUNA" }, { text: "×", accent: true },
  { text: "BRUME COFFEE" }, { text: "×", accent: true },
];

export default function HomePage() {
  return (
    <>
      <SplitHero />

      {/* ABOUT */}
      <section className="bg-[#FDFAF7] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimateIn direction="left">
              <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#C17A5E] mb-5">Our Story</p>
              <h2 className="font-serif text-5xl lg:text-6xl font-light leading-tight text-[#1C1210] mb-8">
                Where <em>wellness</em><br />meets <em>ritual</em>
              </h2>
              <p className="font-sans text-[15px] font-light text-[#6B4F3A] leading-relaxed mb-5">
                AZAI was born from a belief that movement is medicine, that showing up for your body is the most powerful commitment you can make. We built more than a studio: we built a destination in Jal El Dib.
              </p>
              <p className="font-sans text-[15px] font-light text-[#6B4F3A] leading-relaxed mb-10">
                BRUME grew naturally from that vision. Real wellness does not stop when the class ends. It lingers over a slow pour, a pastry, and a moment to breathe. Together, they are a sanctuary.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/azai" className="inline-flex items-center gap-2 bg-[#C17A5E] text-white font-display text-[11px] font-semibold tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#8B4A30] transition-colors duration-300">
                  AZAI Studio →
                </Link>
                <Link href="/brume" className="inline-flex items-center gap-2 border border-[#D4A574] text-[#8B6340] font-display text-[11px] font-semibold tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#D4A574] hover:text-white transition-all duration-300">
                  BRUME Café →
                </Link>
              </div>
            </AnimateIn>
            <AnimateIn direction="right" delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 rounded-2xl overflow-hidden">
                    <img src={IMAGES.azaiLagree} alt="Lagree class" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-40 rounded-2xl overflow-hidden">
                    <img src={IMAGES.brumeCoffee} alt="BRUME coffee" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-40 rounded-2xl overflow-hidden">
                    <img src={IMAGES.brumeInterior} alt="BRUME café" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-64 rounded-2xl overflow-hidden">
                    <img src={IMAGES.azaiSauna} alt="Sauna" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-[#1C1210] py-8 overflow-hidden">
        <Marquee items={marqueeItems} speed={25} className="text-white" bgClass="bg-[#1C1210]" />
      </section>

      {/* EXPERIENCE TILES */}
      <section className="py-24 lg:py-32 bg-[#F9F0E8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#C17A5E] mb-4">Two worlds. One address.</p>
              <h2 className="font-serif text-5xl lg:text-6xl font-light text-[#1C1210]">Choose your <em>experience</em></h2>
            </div>
          </AnimateIn>
          <div className="grid lg:grid-cols-2 gap-6">
            <AnimateIn direction="left" delay={0.1}>
              <Link href="/azai" className="group relative block rounded-3xl overflow-hidden h-[420px] md:h-[500px]">
                <img src={IMAGES.azaiHiit} alt="AZAI Studio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/85 via-[#1A0F0A]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#E8C5B0] mb-3">AZAI Wellness Studio</p>
                  <h3 className="font-serif text-4xl md:text-5xl font-light text-white italic mb-3 md:mb-4">Move.</h3>
                  <p className="font-sans text-sm font-light text-white/65 mb-5 md:mb-6">Lagree · Reformer · HIIT · Yoga · Sauna · Massage</p>
                  <span className="inline-flex items-center gap-2 bg-[#C17A5E] text-white font-display text-[10px] font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full group-hover:bg-[#8B4A30] transition-colors duration-300">
                    Explore Classes →
                  </span>
                </div>
              </Link>
            </AnimateIn>
            <AnimateIn direction="right" delay={0.1}>
              <Link href="/brume" className="group relative block rounded-3xl overflow-hidden h-[420px] md:h-[500px]">
                <img src={IMAGES.brumeSplit} alt="BRUME Café" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A10]/85 via-[#2C1A10]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#D4A574] mb-3">BRUME Coffee Bar</p>
                  <h3 className="font-serif text-4xl md:text-5xl font-light text-white italic mb-3 md:mb-4">Savor.</h3>
                  <p className="font-sans text-sm font-light text-white/65 mb-5 md:mb-6">Coffee · Pastries · Salads · Pour-Over · Daily 7AM–11PM</p>
                  <span className="inline-flex items-center gap-2 bg-[#D4A574] text-white font-display text-[10px] font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full group-hover:bg-[#8B6340] transition-colors duration-300">
                    See the Menu →
                  </span>
                </div>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 lg:py-36 bg-[#1C1210] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#C17A5E]/8 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D4A574]/6 blur-[100px]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimateIn>
            <p className="font-serif text-4xl lg:text-6xl font-light text-white italic leading-tight mb-8">
              "You walk in carrying the day.<br />You walk out lighter."
            </p>
            <div className="w-12 h-px bg-[#C17A5E] mx-auto mb-6" />
            <p className="font-display text-[10px] tracking-widest uppercase text-white/30">AZAI × BRUME · Jal El Dib, Lebanon</p>
          </AnimateIn>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-[#FDFAF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="mb-14">
              <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#C17A5E] mb-4">Community</p>
              <h2 className="font-serif text-5xl lg:text-6xl font-light text-[#1C1210]">What our <em>members</em> say</h2>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <AnimateIn key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 border border-[#F9F0E8] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, j) => <span key={j} className="text-[#C17A5E] text-sm">★</span>)}
                  </div>
                  <p className="font-serif text-lg font-light text-[#1C1210] italic leading-relaxed mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F9F0E8] flex items-center justify-center font-display text-sm font-semibold text-[#C17A5E]">{t.initial}</div>
                    <div>
                      <p className="font-display text-xs font-semibold tracking-wide text-[#1C1210]">{t.name}</p>
                      <p className="font-sans text-[11px] text-[#A08060]">{t.detail}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 lg:py-32 bg-[#F9F0E8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#C17A5E] mb-4">Journal</p>
                <h2 className="font-serif text-5xl lg:text-6xl font-light text-[#1C1210]">Wellness <em>insights</em></h2>
              </div>
              <Link href="/blog" className="hidden md:inline-flex items-center gap-2 font-display text-[11px] font-semibold tracking-widest uppercase text-[#C17A5E] border-b border-[#C17A5E] pb-0.5 hover:text-[#8B4A30] hover:border-[#8B4A30] transition-colors">
                All articles →
              </Link>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <AnimateIn key={post.slug} delay={i * 0.08}>
                <Link href={`/blog`} className="group block">
                  <div className="rounded-2xl overflow-hidden h-52 mb-5">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-[9px] font-semibold tracking-widest uppercase text-white bg-[#C17A5E] px-3 py-1 rounded-full">{post.tag}</span>
                    <span className="font-sans text-[11px] text-[#A08060]">{post.readTime} read</span>
                  </div>
                  <h3 className="font-serif text-xl font-light text-[#1C1210] leading-snug mb-2 group-hover:text-[#C17A5E] transition-colors duration-300">{post.title}</h3>
                  <p className="font-sans text-sm font-light text-[#A08060] leading-relaxed">{post.excerpt}</p>
                </Link>
              </AnimateIn>
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link href="/blog" className="inline-flex items-center gap-2 font-display text-[11px] font-semibold tracking-widest uppercase text-[#C17A5E] border border-[#C17A5E] px-6 py-3 rounded-full hover:bg-[#C17A5E] hover:text-white transition-all duration-300">
              All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 lg:py-28 bg-[#C17A5E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={IMAGES.azaiHero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimateIn>
            <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-white/60 mb-5">Ready to start?</p>
            <h2 className="font-serif text-5xl lg:text-6xl font-light text-white italic mb-6">Your first class awaits</h2>
            <p className="font-sans text-base font-light text-white/75 max-w-md mx-auto mb-10">
              Book via WhatsApp and we will get you set up. No complicated systems, just movement.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-[#8B4A30] font-display text-[11px] font-semibold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-[#F9F0E8] transition-colors duration-300">
                Book via WhatsApp
              </a>
              <Link href="/contact" className="inline-flex items-center gap-3 border border-white/50 text-white font-display text-[11px] font-semibold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-300">
                Find Us →
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
