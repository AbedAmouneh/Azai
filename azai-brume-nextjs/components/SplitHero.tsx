"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

export default function SplitHero() {
  const [hovered, setHovered] = useState<"azai" | "brume" | null>(null);

  const azaiExpanded = hovered === "azai";
  const brumeExpanded = hovered === "brume";

  const spring = { type: "spring" as const, stiffness: 120, damping: 28 };

  return (
    <>
      {/* ── DESKTOP SPLIT HERO ── */}
      <div
        className="relative hidden md:flex h-screen min-h-[600px] overflow-hidden"
        onMouseLeave={() => setHovered(null)}
      >
        {/* ── AZAI SIDE ── */}
        <motion.div
          animate={{ flex: azaiExpanded ? 1.4 : brumeExpanded ? 0.6 : 1 }}
          transition={spring}
          className="relative flex flex-col justify-end overflow-hidden cursor-pointer group"
          onMouseEnter={() => setHovered("azai")}
        >
          <motion.div
            animate={{ scale: azaiExpanded ? 1.06 : 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES.azaiSplit})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/90 via-[#1A0F0A]/40 to-[#1A0F0A]/20" />
          <motion.div animate={{ opacity: azaiExpanded ? 1 : 0 }} transition={{ duration: 0.4 }} className="absolute inset-0 bg-[#C17A5E]/10" />

          <div className="relative z-10 p-10 lg:p-16 pb-16 lg:pb-20">
            <motion.p animate={{ y: azaiExpanded ? 0 : 4, opacity: azaiExpanded ? 1 : 0.7 }} transition={{ duration: 0.4 }} className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#E8C5B0] mb-4">
              The Wellness Studio
            </motion.p>
            <h2 className="font-serif text-white leading-none mb-3">
              <motion.span animate={{ fontSize: azaiExpanded ? "clamp(80px, 10vw, 140px)" : "clamp(56px, 7vw, 100px)" }} transition={spring} className="block font-light italic">
                AZAI
              </motion.span>
            </h2>
            <motion.p animate={{ opacity: azaiExpanded ? 1 : 0, y: azaiExpanded ? 0 : 12 }} transition={{ duration: 0.5, delay: 0.05 }} className="font-sans text-sm font-light text-white/70 max-w-[280px] leading-relaxed mb-8">
              Lagree · Reformer · HIIT · Yoga · Sauna · Massage<br />A space for movement, recovery, and self-care.
            </motion.p>
            <motion.div animate={{ opacity: azaiExpanded ? 1 : 0.6, y: azaiExpanded ? 0 : 6 }} transition={{ duration: 0.4, delay: 0.1 }}>
              <Link href="/azai" className="inline-flex items-center gap-3 bg-[#C17A5E] hover:bg-[#8B4A30] text-white font-display text-[11px] font-semibold tracking-widest uppercase px-7 py-3.5 rounded-full transition-colors duration-300">
                Explore AZAI
                <motion.span animate={{ x: azaiExpanded ? [0, 4, 0] : 0 }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
              </Link>
            </motion.div>
          </div>

          <motion.div animate={{ opacity: brumeExpanded ? 0.5 : 0 }} transition={{ duration: 0.3 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap">
            <p className="font-display text-[10px] font-semibold tracking-[0.4em] uppercase text-white/50">AZAI STUDIO</p>
          </motion.div>
        </motion.div>

        {/* ── DIVIDER ── */}
        <motion.div animate={{ scaleY: hovered ? 0.92 : 1, opacity: hovered ? 0.4 : 0.6 }} transition={{ duration: 0.5 }} className="relative z-20 w-px flex-shrink-0 self-stretch my-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />

        {/* ── BRUME SIDE ── */}
        <motion.div
          animate={{ flex: brumeExpanded ? 1.4 : azaiExpanded ? 0.6 : 1 }}
          transition={spring}
          className="relative flex flex-col justify-end overflow-hidden cursor-pointer"
          onMouseEnter={() => setHovered("brume")}
        >
          <motion.div animate={{ scale: brumeExpanded ? 1.06 : 1 }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.brumeSplit})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A10]/90 via-[#2C1A10]/40 to-[#2C1A10]/15" />
          <motion.div animate={{ opacity: brumeExpanded ? 1 : 0 }} transition={{ duration: 0.4 }} className="absolute inset-0 bg-[#D4A574]/10" />

          <div className="relative z-10 p-10 lg:p-16 pb-16 lg:pb-20">
            <motion.p animate={{ y: brumeExpanded ? 0 : 4, opacity: brumeExpanded ? 1 : 0.7 }} transition={{ duration: 0.4 }} className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#D4A574] mb-4">
              The Coffee Bar
            </motion.p>
            <h2 className="font-serif text-white leading-none mb-3">
              <motion.span animate={{ fontSize: brumeExpanded ? "clamp(80px, 10vw, 140px)" : "clamp(56px, 7vw, 100px)" }} transition={spring} className="block font-light italic">
                BRUME
              </motion.span>
            </h2>
            <motion.p animate={{ opacity: brumeExpanded ? 1 : 0, y: brumeExpanded ? 0 : 12 }} transition={{ duration: 0.5, delay: 0.05 }} className="font-sans text-sm font-light text-white/70 max-w-[280px] leading-relaxed mb-8">
              Coffee · Pastries · Salads · Pour-Over<br />A calm escape in a hidden corner. Open daily 7AM–11PM.
            </motion.p>
            <motion.div animate={{ opacity: brumeExpanded ? 1 : 0.6, y: brumeExpanded ? 0 : 6 }} transition={{ duration: 0.4, delay: 0.1 }}>
              <Link href="/brume" className="inline-flex items-center gap-3 bg-[#D4A574] hover:bg-[#8B6340] text-white font-display text-[11px] font-semibold tracking-widest uppercase px-7 py-3.5 rounded-full transition-colors duration-300">
                Explore BRUME
                <motion.span animate={{ x: brumeExpanded ? [0, 4, 0] : 0 }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
              </Link>
            </motion.div>
          </div>

          <motion.div animate={{ opacity: azaiExpanded ? 0.5 : 0 }} transition={{ duration: 0.3 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap">
            <p className="font-display text-[10px] font-semibold tracking-[0.4em] uppercase text-white/50">BRUME CAFÉ</p>
          </motion.div>
        </motion.div>

        {/* ── CENTER BADGE ── */}
        <motion.div animate={{ opacity: hovered ? 0 : 1, scale: hovered ? 0.8 : 1 }} transition={{ duration: 0.4 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-white/60 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">Hover to explore</p>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          </div>
        </motion.div>

        {/* ── BOTTOM BAR ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex">
          <div className="flex-1 bg-black/30 backdrop-blur-sm px-10 lg:px-16 py-3 flex items-center gap-6 border-t border-white/5">
            <span className="font-display text-[9px] tracking-widest uppercase text-white/40">Jal El Dib</span>
            <span className="w-px h-3 bg-white/20" />
            <span className="font-display text-[9px] tracking-widest uppercase text-white/40">Lebanon</span>
          </div>
          <div className="w-px bg-white/10" />
          <div className="flex-1 bg-black/30 backdrop-blur-sm px-10 lg:px-16 py-3 flex items-center gap-6 border-t border-white/5">
            <span className="font-display text-[9px] tracking-widest uppercase text-white/40">Open Daily</span>
            <span className="w-px h-3 bg-white/20" />
            <span className="font-display text-[9px] tracking-widest uppercase text-[#D4A574]/60">7AM – 11PM</span>
          </div>
        </div>
      </div>

      {/* ── MOBILE STACKED HERO ── */}
      <div className="flex md:hidden flex-col h-screen min-h-[600px] overflow-hidden">
        {/* AZAI — top half */}
        <Link href="/azai" className="relative flex-1 flex flex-col justify-end overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-active:scale-105"
            style={{ backgroundImage: `url(${IMAGES.azaiSplit})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/85 via-[#1A0F0A]/30 to-transparent" />
          <div className="relative z-10 p-7 pb-8">
            <p className="font-display text-[9px] font-semibold tracking-widest uppercase text-[#E8C5B0] mb-2">
              The Wellness Studio
            </p>
            <h2 className="font-serif text-white text-6xl font-light italic leading-none mb-4">AZAI</h2>
            <p className="font-sans text-xs text-white/60 mb-5">Lagree · Pilates · Yoga · Sauna · Massage</p>
            <span className="inline-flex items-center gap-2 bg-[#C17A5E] text-white font-display text-[10px] font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full">
              Explore AZAI →
            </span>
          </div>
        </Link>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-shrink-0" />

        {/* BRUME — bottom half */}
        <Link href="/brume" className="relative flex-1 flex flex-col justify-end overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-active:scale-105"
            style={{ backgroundImage: `url(${IMAGES.brumeSplit})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A10]/85 via-[#2C1A10]/30 to-transparent" />
          <div className="relative z-10 p-7 pb-8">
            <p className="font-display text-[9px] font-semibold tracking-widest uppercase text-[#D4A574] mb-2">
              The Coffee Bar
            </p>
            <h2 className="font-serif text-white text-6xl font-light italic leading-none mb-4">BRUME</h2>
            <p className="font-sans text-xs text-white/60 mb-5">Coffee · Pastries · Salads · Open 7AM–11PM</p>
            <span className="inline-flex items-center gap-2 bg-[#D4A574] text-white font-display text-[10px] font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full">
              Explore BRUME →
            </span>
          </div>
        </Link>

        {/* Bottom bar */}
        <div className="flex-shrink-0 bg-black/40 backdrop-blur-sm px-7 py-2.5 flex items-center justify-center gap-4 border-t border-white/5">
          <span className="font-display text-[8px] tracking-widest uppercase text-white/40">Jal El Dib, Lebanon</span>
          <span className="w-px h-3 bg-white/20" />
          <span className="font-display text-[8px] tracking-widest uppercase text-[#D4A574]/60">7AM – 11PM Daily</span>
        </div>
      </div>
    </>
  );
}
