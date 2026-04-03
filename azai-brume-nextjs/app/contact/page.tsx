"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, AtSign, ArrowRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import { WHATSAPP_URL, PHONE_NUMBER, INSTAGRAM_AZAI, INSTAGRAM_BRUME, LOCATION, MAPS_URL } from "@/lib/constants";

const CONTACT_INFO = [
  {
    Icon: MapPin,
    label: "Location",
    value: LOCATION,
    sub: "Jal El Dib Highway, near the main roundabout",
    href: MAPS_URL,
  },
  {
    Icon: Phone,
    label: "Phone / WhatsApp",
    value: PHONE_NUMBER,
    sub: "Call or message us anytime",
    href: WHATSAPP_URL,
  },
  {
    Icon: Clock,
    label: "Hours",
    value: "7:00 AM – 11:00 PM",
    sub: "Open every day including weekends",
    href: null,
  },
  {
    Icon: AtSign,
    label: "Instagram",
    value: "@azaiexperience · @brumecoffeebar",
    sub: "Follow for schedules & updates",
    href: INSTAGRAM_AZAI,
  },
];

const QUICK_ACTIONS = [
  { label: "01", title: "Book a Class", desc: "Message us on WhatsApp to reserve your spot in any AZAI class.", href: WHATSAPP_URL, color: "#C17A5E" },
  { label: "02", title: "Reserve a Table", desc: "Planning to come with a group? Let us know in advance.", href: WHATSAPP_URL, color: "#D4A574" },
  { label: "03", title: "Ask About Memberships", desc: "Get pricing, details, and what's right for your lifestyle.", href: WHATSAPP_URL, color: "#8B4A30" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", interest: "general" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi AZAI × BRUME!\n\nName: ${form.name}\nEmail: ${form.email}\nInterest: ${form.interest}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/96171607705?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <main className="bg-[#FDFAF7] min-h-screen">
      {/* ── HERO ── */}
      <section className="relative bg-[#1C1210] pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-px bg-white" style={{ left: `${(i + 1) * 16.6}%` }} />
          ))}
        </div>
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <AnimateIn>
            <p className="font-display text-[10px] font-semibold tracking-[0.4em] uppercase text-[#C17A5E] mb-6">Find Us</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-serif text-white text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-light italic leading-none mb-6">
              Come<br />Say Hello
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="font-sans text-white/50 text-base font-light max-w-xl mx-auto leading-relaxed">
              Whether you have a question, want to book a class, or just want to know if we have oat milk, we're here.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── LEFT ── */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {CONTACT_INFO.map((item, i) => (
                <AnimateIn key={item.label} delay={i * 0.08}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group block bg-white rounded-xl p-6 border border-[#1C1210]/6 hover:border-[#C17A5E]/30 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#C17A5E]/10 flex items-center justify-center mb-4 group-hover:bg-[#C17A5E]/20 transition-colors">
                        <item.Icon size={16} className="text-[#C17A5E]" />
                      </div>
                      <p className="font-display text-[9px] font-semibold tracking-widest uppercase text-[#A08060] mb-2">{item.label}</p>
                      <p className="font-sans text-[#1C1210] text-sm font-medium leading-snug mb-1 group-hover:text-[#C17A5E] transition-colors">{item.value}</p>
                      <p className="font-sans text-[#A08060] text-xs font-light">{item.sub}</p>
                    </a>
                  ) : (
                    <div className="bg-white rounded-xl p-6 border border-[#1C1210]/6">
                      <div className="w-9 h-9 rounded-lg bg-[#C17A5E]/10 flex items-center justify-center mb-4">
                        <item.Icon size={16} className="text-[#C17A5E]" />
                      </div>
                      <p className="font-display text-[9px] font-semibold tracking-widest uppercase text-[#A08060] mb-2">{item.label}</p>
                      <p className="font-sans text-[#1C1210] text-sm font-medium leading-snug mb-1">{item.value}</p>
                      <p className="font-sans text-[#A08060] text-xs font-light">{item.sub}</p>
                    </div>
                  )}
                </AnimateIn>
              ))}
            </div>

            {/* Map */}
            <AnimateIn delay={0.2}>
              <div className="rounded-2xl overflow-hidden border border-[#1C1210]/8 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.9827827882396!2d35.5768!3d33.8957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17b2b3c1f51f%3A0x0!2zMzPCsDUzJzQ0LjUiTiAzNcKwMzQnMzYuNSJF!5e0!3m2!1sen!2slb!4v1709900000000!5m2!1sen!2slb"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AZAI × BRUME Location, Jal El Dib, Lebanon"
                />
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 font-display text-[10px] font-semibold tracking-widest uppercase text-[#C17A5E] hover:text-[#8B4A30] transition-colors"
              >
                Open in Google Maps →
              </a>
            </AnimateIn>

            {/* Social */}
            <AnimateIn delay={0.3}>
              <div className="mt-10 pt-10 border-t border-[#1C1210]/8">
                <p className="font-display text-[9px] font-semibold tracking-widest uppercase text-[#A08060] mb-5">Follow Along</p>
                <div className="flex flex-col gap-3">
                  <a href={INSTAGRAM_AZAI} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-[#1C1210]/6 hover:border-[#C17A5E]/30 hover:shadow-md transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-[#C17A5E]/15 flex items-center justify-center flex-shrink-0">
                      <AtSign size={14} className="text-[#C17A5E]" />
                    </div>
                    <div>
                      <p className="font-sans text-[#1C1210] text-sm font-medium group-hover:text-[#C17A5E] transition-colors">@azaiexperience</p>
                      <p className="font-sans text-[#A08060] text-xs font-light">Class schedules, tips & community</p>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-[#A08060] group-hover:text-[#C17A5E] transition-colors" />
                  </a>
                  <a href={INSTAGRAM_BRUME} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-[#1C1210]/6 hover:border-[#D4A574]/40 hover:shadow-md transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-[#D4A574]/15 flex items-center justify-center flex-shrink-0">
                      <AtSign size={14} className="text-[#D4A574]" />
                    </div>
                    <div>
                      <p className="font-sans text-[#1C1210] text-sm font-medium group-hover:text-[#D4A574] transition-colors">@brumecoffeebar</p>
                      <p className="font-sans text-[#A08060] text-xs font-light">Brews, pastries & café life</p>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-[#A08060] group-hover:text-[#D4A574] transition-colors" />
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* ── RIGHT: Form ── */}
          <AnimateIn direction="left" delay={0.15}>
            <div className="bg-[#1C1210] rounded-2xl p-8 lg:p-10 lg:sticky lg:top-28">
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <p className="font-display text-[10px] font-semibold tracking-[0.4em] uppercase text-[#C17A5E] mb-6">Sent</p>
                  <h3 className="font-serif text-white text-4xl font-light italic mb-4">Message sent.</h3>
                  <p className="font-sans text-white/50 text-sm font-light leading-relaxed mb-8">
                    WhatsApp has opened with your message. We reply within a few hours.
                  </p>
                  <button onClick={() => setSent(false)} className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#C17A5E] hover:text-white transition-colors">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <p className="font-display text-[10px] font-semibold tracking-[0.3em] uppercase text-[#C17A5E] mb-2">Send a Message</p>
                  <h2 className="font-serif text-white text-3xl font-light italic mb-8">We'd love to hear from you</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block font-display text-[9px] font-semibold tracking-widest uppercase text-white/40 mb-2">Your Name</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Layla Mansour"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 font-sans text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#C17A5E]/50 transition-colors" />
                    </div>
                    <div>
                      <label className="block font-display text-[9px] font-semibold tracking-widest uppercase text-white/40 mb-2">Email Address</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="layla@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 font-sans text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#C17A5E]/50 transition-colors" />
                    </div>
                    <div>
                      <label className="block font-display text-[9px] font-semibold tracking-widest uppercase text-white/40 mb-2">I'm interested in…</label>
                      <select name="interest" value={form.interest} onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 font-sans text-sm text-white focus:outline-none focus:border-[#C17A5E]/50 transition-colors appearance-none">
                        <option value="general" className="bg-[#1C1210]">General Enquiry</option>
                        <option value="lagree" className="bg-[#1C1210]">Lagree Megaformer</option>
                        <option value="reformer" className="bg-[#1C1210]">Reformer Pilates</option>
                        <option value="yoga" className="bg-[#1C1210]">Yoga</option>
                        <option value="hiit" className="bg-[#1C1210]">HIIT Classes</option>
                        <option value="sauna" className="bg-[#1C1210]">Sauna / Recovery</option>
                        <option value="massage" className="bg-[#1C1210]">Massage Therapy</option>
                        <option value="brume" className="bg-[#1C1210]">BRUME Café</option>
                        <option value="membership" className="bg-[#1C1210]">Memberships</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-display text-[9px] font-semibold tracking-widest uppercase text-white/40 mb-2">Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us what's on your mind…"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 font-sans text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#C17A5E]/50 transition-colors resize-none" />
                    </div>
                    <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#C17A5E] hover:bg-[#8B4A30] text-white font-display text-[11px] font-semibold tracking-widest uppercase py-4 rounded-full transition-colors duration-300 flex items-center justify-center gap-3">
                      Send via WhatsApp →
                    </motion.button>
                    <p className="font-sans text-white/25 text-[11px] text-center leading-relaxed">
                      This will open WhatsApp with your message pre-filled. We reply within a few hours.
                    </p>
                  </form>
                </>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── QUICK ACTIONS ── */}
      <section className="bg-white border-t border-[#1C1210]/5 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <p className="font-display text-[9px] font-semibold tracking-[0.4em] uppercase text-[#A08060] text-center mb-12">Quick Actions</p>
          </AnimateIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {QUICK_ACTIONS.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <a href={item.href} target="_blank" rel="noopener noreferrer"
                  className="group block bg-[#FDFAF7] rounded-2xl p-8 border border-[#1C1210]/6 hover:border-[#C17A5E]/20 hover:shadow-xl transition-all duration-300 text-center">
                  <p className="font-serif text-5xl font-light italic mb-5 transition-colors duration-300"
                    style={{ color: item.color }}>
                    {item.label}
                  </p>
                  <h3 className="font-serif text-[#1C1210] text-xl font-light italic mb-3 group-hover:text-[#C17A5E] transition-colors">{item.title}</h3>
                  <p className="font-sans text-[#A08060] text-sm font-light leading-relaxed mb-6">{item.desc}</p>
                  <span className="font-display text-[9px] font-semibold tracking-widest uppercase px-5 py-2 rounded-full text-white transition-colors duration-300"
                    style={{ backgroundColor: item.color }}>
                    Message Us
                  </span>
                </a>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
