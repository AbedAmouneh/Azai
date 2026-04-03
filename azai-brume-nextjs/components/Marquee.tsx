"use client";
import { motion } from "framer-motion";

interface MarqueeProps {
  items: { text: string; accent?: boolean }[];
  speed?: number;
  className?: string;
  bgClass?: string;
}

export default function Marquee({ items, speed = 30, className = "", bgClass = "" }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${bgClass}`}>
      <div className="flex">
        <motion.div
          className="flex gap-12 whitespace-nowrap shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((item, i) => (
            <span
              key={i}
              className={`font-serif text-5xl lg:text-7xl font-light shrink-0 ${
                item.accent ? "text-[#C17A5E]" : className
              }`}
            >
              {item.text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
