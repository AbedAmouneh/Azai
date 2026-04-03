import Link from "next/link";
import { WHATSAPP_URL, PHONE_NUMBER, INSTAGRAM_AZAI, INSTAGRAM_BRUME, LOCATION, MAPS_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1C1210] text-white/60 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-display text-xl font-bold tracking-widest text-white mb-4">
              AZAI <span className="text-[#C17A5E]">×</span> BRUME
            </p>
            <p className="font-sans text-sm font-light leading-relaxed text-white/40 max-w-[220px]">
              A space for movement, recovery, and self-care, with a calm coffee escape in a hidden corner.
            </p>
            <p className="font-display text-xs tracking-widest text-white/30 mt-4 uppercase">
              {LOCATION}
            </p>
          </div>

          {/* AZAI */}
          <div>
            <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#C17A5E] mb-5">AZAI Classes</p>
            <ul className="space-y-3">
              {["Lagree Megaformer","Reformer Pilates","Mat Pilates","Hot Sculpt","HIIT","Yoga","Sauna","Massage"].map(s => (
                <li key={s}>
                  <Link href="/azai" className="font-sans text-sm font-light text-white/50 hover:text-[#C17A5E] transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BRUME */}
          <div>
            <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#D4A574] mb-5">BRUME Café</p>
            <ul className="space-y-3">
              {["Specialty Coffee","Pour-Over Brewing","Pastries","Salads & Bowls"].map(s => (
                <li key={s}>
                  <Link href="/brume" className="font-sans text-sm font-light text-white/50 hover:text-[#D4A574] transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#D4A574] mt-8 mb-5">Hours</p>
            <p className="font-sans text-sm text-white/50 font-light">7:00 AM – 11:00 PM</p>
            <p className="font-sans text-xs text-white/30 mt-1">Open every day</p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-white/30 mb-5">Find Us</p>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g,'')}`} className="font-sans text-sm text-white/50 hover:text-[#C17A5E] transition-colors duration-200">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-white/50 hover:text-[#C17A5E] transition-colors duration-200">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-white/50 hover:text-[#C17A5E] transition-colors duration-200">
                  {LOCATION}
                </a>
              </li>
            </ul>
            <p className="font-display text-[10px] font-semibold tracking-widest uppercase text-white/30 mt-8 mb-5">Follow</p>
            <ul className="space-y-3">
              <li>
                <a href={INSTAGRAM_AZAI} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-white/50 hover:text-[#C17A5E] transition-colors duration-200">
                  @azaiexperience
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_BRUME} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-white/50 hover:text-[#D4A574] transition-colors duration-200">
                  @brumecoffeebar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
          <p className="font-sans text-xs text-white/20">
            © {new Date().getFullYear()} AZAI × BRUME. All rights reserved. Jal El Dib, Lebanon.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-6">
              <Link href="/blog" className="font-display text-[10px] tracking-widest uppercase text-white/25 hover:text-white/50 transition-colors">Journal</Link>
              <Link href="/contact" className="font-display text-[10px] tracking-widest uppercase text-white/25 hover:text-white/50 transition-colors">Contact</Link>
              <Link href="/roadmap" className="font-display text-[10px] tracking-widest uppercase text-white/25 hover:text-white/50 transition-colors">Roadmap</Link>
            </div>
            <a
              href="https://voxire.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300"
              title="Developed by Voxire"
            >
              <span className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-white/40 group-hover:text-white/70 transition-colors duration-300">Developed by</span>
              <img
                src="/instagram/Voxire-logo-enblm-m.png"
                alt="Voxire"
                className="h-[14px] w-auto brightness-0 invert opacity-50 group-hover:opacity-90 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
