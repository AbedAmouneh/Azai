import AnimateIn from "@/components/AnimateIn";
import Marquee from "@/components/Marquee";
import Link from "next/link";
import { AZAI_SERVICES, IMAGES, TESTIMONIALS, WHATSAPP_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AZAI, The Wellness Studio",
  description: "Lagree, Reformer Pilates, Mat, Hot Sculpt, HIIT, Yoga, Sauna & Massage in Jal El Dib, Lebanon. A space for movement, recovery, and self-care.",
};

const marqueeItems = [
  { text: "LAGREE" }, { text: "·", accent: true },
  { text: "REFORMER" }, { text: "·", accent: true },
  { text: "HOT SCULPT" }, { text: "·", accent: true },
  { text: "YOGA" }, { text: "·", accent: true },
  { text: "SAUNA" }, { text: "·", accent: true },
  { text: "MASSAGE" }, { text: "·", accent: true },
];

const packages = [
  {
    name: "Starter",
    sub: "5-class pack",
    features: ["5 classes of your choice", "All disciplines", "Valid 60 days", "App scheduling"],
    featured: false,
  },
  {
    name: "Monthly",
    sub: "Unlimited membership",
    features: ["Unlimited classes", "Priority booking", "Sauna access included", "10% BRUME discount", "Community events"],
    featured: true,
  },
  {
    name: "PT Pack",
    sub: "Personal training",
    features: ["1-on-1 expert sessions", "Personalized program", "Progress tracking", "Nutrition guidance"],
    featured: false,
  },
];

export default function AzaiPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-[#1A0F0A]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.azaiHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A] via-[#1A0F0A]/50 to-[#1A0F0A]/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24 pt-32 w-full">
          <AnimateIn>
            <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#E8C5B0] mb-4">AZAI, The Wellness Studio</p>
            <h1 className="font-serif text-7xl lg:text-[120px] font-light text-white italic leading-none mb-6">
              Movement,<br />focused on<br /><span className="text-[#C17A5E]">what matters.</span>
            </h1>
            <p className="font-sans text-base font-light text-white/65 max-w-md mb-10 leading-relaxed">
              A space for movement, recovery, and self-care in Jal El Dib, Lebanon. Eight disciplines. One intention.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C17A5E] text-white font-display text-[11px] font-semibold tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-[#8B4A30] transition-colors duration-300">
                Book a Class
              </a>
              <a href="#classes"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-display text-[11px] font-semibold tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors duration-300">
                See All Classes ↓
              </a>
            </div>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center gap-8">
            {["Lagree","Reformer","HIIT","Yoga","Sauna","Massage"].map((s) => (
              <span key={s} className="font-display text-[9px] tracking-widest uppercase text-white/35 whitespace-nowrap">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-[#F9F0E8] py-10 overflow-hidden">
        <Marquee items={marqueeItems} speed={20} className="text-[#E8C5B0]" bgClass="bg-[#F9F0E8]" />
      </section>

      {/* CLASSES GRID */}
      <section id="classes" className="py-24 lg:py-32 bg-[#FDFAF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="mb-16">
              <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#C17A5E] mb-4">Disciplines</p>
              <h2 className="font-serif text-5xl lg:text-6xl font-light text-[#1C1210]">Find your <em>discipline</em></h2>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {AZAI_SERVICES.map((s, i) => (
              <AnimateIn key={s.id} delay={i * 0.06}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="group block rounded-2xl overflow-hidden bg-white border border-[#F9F0E8] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                  <div className="h-44 overflow-hidden">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="text-2xl mb-2">{s.icon}</div>
                    <h3 className="font-display text-xs font-semibold tracking-widest uppercase text-[#1C1210] mb-2">{s.name}</h3>
                    <p className="font-sans text-[12px] font-light text-[#A08060] leading-relaxed mb-3">{s.description}</p>
                    <span className="inline-block font-display text-[8px] font-semibold tracking-widest uppercase bg-[#F9F0E8] text-[#C17A5E] px-3 py-1 rounded-full">
                      {s.badge}
                    </span>
                  </div>
                </a>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-24 lg:py-32 bg-[#F9F0E8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#C17A5E] mb-4">Membership</p>
              <h2 className="font-serif text-5xl lg:text-6xl font-light text-[#1C1210]">Commit to <em>yourself</em></h2>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {packages.map((p, i) => (
              <AnimateIn key={p.name} delay={i * 0.08}>
                <div className={`rounded-2xl p-8 ${p.featured ? "bg-[#C17A5E] text-white" : "bg-white border border-[#F9F0E8]"} hover:-translate-y-2 hover:shadow-xl transition-all duration-300`}>
                  {p.featured && (
                    <div className="inline-block font-display text-[8px] font-semibold tracking-widest uppercase bg-[#8B4A30] text-white px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </div>
                  )}
                  <p className={`font-display text-[10px] font-semibold tracking-widest uppercase mb-2 ${p.featured ? "text-white/70" : "text-[#C17A5E]"}`}>{p.name}</p>
                  <p className={`font-sans text-sm mb-6 ${p.featured ? "text-white/60" : "text-[#A08060]"}`}>{p.sub}</p>
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className={`flex items-center gap-2 font-sans text-sm ${p.featured ? "text-white/85" : "text-[#6B4F3A]"}`}>
                        <span className={`w-1 h-1 rounded-full flex-shrink-0 ${p.featured ? "bg-white" : "bg-[#C17A5E]"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                    className={`block text-center font-display text-[10px] font-semibold tracking-widest uppercase py-3 rounded-full transition-all duration-300 ${
                      p.featured
                        ? "bg-white/20 text-white hover:bg-white/30 border border-white/30"
                        : "border border-[#C17A5E] text-[#C17A5E] hover:bg-[#C17A5E] hover:text-white"
                    }`}>
                    Enquire via WhatsApp
                  </a>
                </div>
              </AnimateIn>
            ))}
          </div>
          <p className="text-center font-sans text-sm text-[#A08060] mt-8">
            All pricing in USD. Contact us for current rates.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#1C1210]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="mb-14">
              <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#C17A5E] mb-4">Members</p>
              <h2 className="font-serif text-5xl font-light text-white">What they <em>say</em></h2>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <AnimateIn key={i} delay={i * 0.08}>
                <div className="border border-white/8 rounded-2xl p-8 hover:border-[#C17A5E]/30 transition-colors duration-300">
                  <div className="flex gap-0.5 mb-5">{[...Array(5)].map((_, j) => <span key={j} className="text-[#C17A5E] text-sm">★</span>)}</div>
                  <p className="font-serif text-lg font-light text-white/80 italic leading-relaxed mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#C17A5E]/20 flex items-center justify-center font-display text-sm font-semibold text-[#C17A5E]">{t.initial}</div>
                    <div>
                      <p className="font-display text-xs font-semibold tracking-wide text-white/80">{t.name}</p>
                      <p className="font-sans text-[11px] text-white/35">{t.detail}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ALSO TRY BRUME */}
      <section className="py-20 bg-[#FBF5EE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="flex flex-col md:flex-row items-center gap-8 rounded-3xl bg-white border border-[#F9F0E8] p-10 lg:p-14">
              <div className="flex-1">
                <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#D4A574] mb-3">After Your Class</p>
                <h3 className="font-serif text-4xl font-light text-[#1C1210] mb-4">Stay for <em>BRUME</em></h3>
                <p className="font-sans text-sm font-light text-[#6B4F3A] leading-relaxed max-w-sm">
                  A calm coffee escape in a hidden corner, right here inside AZAI. Specialty coffee, pastries, and salads. Open daily 7AM–11PM.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link href="/brume"
                  className="inline-flex items-center gap-2 bg-[#D4A574] text-white font-display text-[11px] font-semibold tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-[#8B6340] transition-colors duration-300">
                  Visit BRUME →
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
