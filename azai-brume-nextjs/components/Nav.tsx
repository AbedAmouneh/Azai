"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

const links = [
  { href: "/azai", label: "AZAI Studio" },
  { href: "/brume", label: "BRUME Café" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isAzai = pathname.startsWith("/azai");
  const isBrume = pathname.startsWith("/brume");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  // Nav bg logic
  const navBg = scrolled || open
    ? "bg-[#FDFAF7]/95 backdrop-blur-xl shadow-sm"
    : isHome ? "bg-transparent" : "bg-[#FDFAF7]/95 backdrop-blur-xl";

  const logoColor = scrolled || !isHome || open ? "text-[#1C1210]" : "text-white";
  const linkColor = scrolled || !isHome || open ? "text-[#6B4F3A] hover:text-[#C17A5E]" : "text-white/85 hover:text-white";

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className={`font-display font-bold text-lg tracking-widest uppercase transition-colors duration-300 ${logoColor}`}>
              AZAI <span className="text-[#C17A5E]">×</span> BRUME
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`font-display text-[10px] font-semibold tracking-widest uppercase transition-colors duration-300 ${
                    pathname.startsWith(l.href) ? "text-[#C17A5E]" : linkColor
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-display text-[10px] font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300 ${
                  scrolled || !isHome
                    ? "bg-[#C17A5E] text-white hover:bg-[#8B4A30]"
                    : "bg-white text-[#8B4A30] hover:bg-[#C17A5E] hover:text-white"
                }`}
              >
                Book Now
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
                className={`block w-6 h-px transition-colors duration-300 ${scrolled || !isHome || open ? "bg-[#1C1210]" : "bg-white"}`}
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1 }}
                className={`block w-6 h-px transition-colors duration-300 ${scrolled || !isHome || open ? "bg-[#1C1210]" : "bg-white"}`}
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
                className={`block w-6 h-px transition-colors duration-300 ${scrolled || !isHome || open ? "bg-[#1C1210]" : "bg-white"}`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#FDFAF7]/98 backdrop-blur-xl border-b border-[#E8C5B0]/30 px-6 py-8"
          >
            <div className="flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={l.href}
                    className={`font-serif text-3xl font-light tracking-tight block ${
                      pathname.startsWith(l.href) ? "text-[#C17A5E]" : "text-[#1C1210]"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C17A5E] text-white font-display text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-full w-fit mt-2"
              >
                Book via WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
