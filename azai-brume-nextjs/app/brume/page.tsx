import AnimateIn from "@/components/AnimateIn";
import Marquee from "@/components/Marquee";
import Link from "next/link";
import { Clock } from "lucide-react";
import { BRUME_MENU, IMAGES, WHATSAPP_URL, INSTAGRAM_BRUME } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BRUME: Coffee Bar",
  description: "A calm coffee escape in a hidden corner inside AZAI, Jal El Dib. Specialty coffee, pastries, salads and pour-over brewing. Open daily 7AM to 11PM.",
};

export default function BrumePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-[#2C1A10]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.brumeHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A10] via-[#2C1A10]/50 to-[#2C1A10]/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24 pt-32 w-full">
          <AnimateIn>
            <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#D4A574] mb-4">BRUME: Coffee Bar</p>
            <h1 className="font-serif text-7xl lg:text-[120px] font-light text-white italic leading-none mb-6">
              A calm<br />escape in a<br /><span className="text-[#D4A574]">hidden corner.</span>
            </h1>
            <p className="font-sans text-base font-light text-white/65 max-w-md mb-10 leading-relaxed">
              Inside AZAI · Jal El Dib, Lebanon<br />Open every day from 7:00 AM to 11:00 PM
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#menu"
                className="inline-flex items-center gap-2 bg-[#D4A574] text-white font-display text-[11px] font-semibold tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-[#8B6340] transition-colors duration-300">
                See the Menu ↓
              </a>
              <a href={INSTAGRAM_BRUME} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-display text-[11px] font-semibold tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors duration-300">
                @brumecoffeebar ↗
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee
        items={[
          { text: "SINGLE ORIGIN" }, { text: "POUR OVER", accent: true }, { text: "FLAT WHITE" },
          { text: "COLD BREW", accent: true }, { text: "CROISSANT" }, { text: "WELLNESS BOWL", accent: true },
          { text: "MATCHA LATTE" }, { text: "OPEN DAILY", accent: true }, { text: "7AM – 11PM" },
        ]}
        bgClass="bg-[#2C1A10]"
        className="text-white"
        speed={35}
      />

      {/* STORY */}
      <section className="py-24 lg:py-32 bg-[#FBF5EE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#D4A574] mb-5">The Story</p>
              <h2 className="font-serif text-5xl lg:text-6xl font-light text-[#5C3D2E] leading-tight mb-8">
                Sunlight through the trees,<br /><em>coffee on the table.</em>
              </h2>
              <p className="font-sans text-[15px] font-light text-[#6B4F3A] leading-relaxed mb-5">
                BRUME was never meant to be just a coffee bar. It grew from the belief that wellness extends beyond the workout, that the moment after the sweat is as important as the sweat itself.
              </p>
              <p className="font-sans text-[15px] font-light text-[#6B4F3A] leading-relaxed mb-5">
                Our terrace is where slow mornings turn into peaceful afternoons. Our pour-overs are made with the same intention as our Lagree classes, careful, deliberate, and worth the wait.
              </p>
              <p className="font-sans text-[15px] font-light text-[#6B4F3A] leading-relaxed mb-10 italic font-serif text-xl">
                "Only if it's Brûme Coffee.", @brumecoffeebar
              </p>
              <div className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-[#F9F0E8]">
                <div className="w-10 h-10 rounded-xl bg-[#F9F0E8] flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-[#D4A574]" />
                </div>
                <div>
                  <p className="font-display text-xs font-semibold tracking-widest uppercase text-[#5C3D2E]">Open Every Day</p>
                  <p className="font-sans text-sm text-[#6B4F3A] mt-0.5">7:00 AM, 11:00 PM · Jal El Dib, Lebanon</p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn direction="right" delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-56 rounded-2xl overflow-hidden">
                    <img src={IMAGES.brumeCoffee} alt="Coffee" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-44 rounded-2xl overflow-hidden">
                    <img src={IMAGES.brumePastry} alt="Pastries" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-44 rounded-2xl overflow-hidden">
                    <img src={IMAGES.brumeSalad} alt="Salad bowl" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-56 rounded-2xl overflow-hidden">
                    <img src={IMAGES.brumeInterior} alt="Café interior" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#D4A574] mb-4">Menu</p>
              <h2 className="font-serif text-5xl lg:text-6xl font-light text-[#5C3D2E]">Made with <em>care</em></h2>
              <p className="font-sans text-sm font-light text-[#A08060] mt-4 max-w-md mx-auto">
                Everything on our menu is chosen with intention, to nourish after movement, and delight at any hour.
              </p>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {BRUME_MENU.map((cat, i) => (
              <AnimateIn key={cat.category} delay={i * 0.1}>
                <div className="bg-[#FBF5EE] rounded-2xl p-8">
                  <div className="text-3xl mb-4">{cat.icon}</div>
                  <h3 className="font-display text-[11px] font-semibold tracking-widest uppercase text-[#5C3D2E] mb-6">{cat.category}</h3>
                  <ul className="space-y-5">
                    {cat.items.map((item) => (
                      <li key={item.name} className="border-b border-[#E8C5B0]/30 pb-4 last:border-0 last:pb-0">
                        <p className="font-display text-xs font-semibold tracking-wide text-[#1C1210] uppercase mb-1">{item.name}</p>
                        <p className="font-sans text-[12px] font-light text-[#A08060] leading-relaxed">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="font-sans text-sm text-[#A08060]">Menu changes seasonally. Follow us for daily specials.</p>
            <a href={INSTAGRAM_BRUME} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 font-display text-[11px] font-semibold tracking-widest uppercase text-[#D4A574] border-b border-[#D4A574] pb-0.5 hover:text-[#8B6340] hover:border-[#8B6340] transition-colors">
              @brumecoffeebar ↗
            </a>
          </div>
        </div>
      </section>

      {/* ALSO TRY AZAI */}
      <section className="py-20 bg-[#1C1210]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="flex flex-col md:flex-row items-center gap-8 rounded-3xl border border-white/8 p-10 lg:p-14">
              <div className="flex-1">
                <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#C17A5E] mb-3">Before Your Coffee</p>
                <h3 className="font-serif text-4xl font-light text-white mb-4">Earn it at <em>AZAI</em></h3>
                <p className="font-sans text-sm font-light text-white/55 leading-relaxed max-w-sm">
                  Lagree, Reformer Pilates, HIIT, Yoga, Sauna, Massage, right next door. A class followed by a BRUME coffee is the perfect morning.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link href="/azai"
                  className="inline-flex items-center gap-2 bg-[#C17A5E] text-white font-display text-[11px] font-semibold tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-[#8B4A30] transition-colors duration-300">
                  Book a Class →
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
