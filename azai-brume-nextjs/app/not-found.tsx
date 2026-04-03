import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-[#1C1210] min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-display text-[10px] font-semibold tracking-[0.4em] uppercase text-[#C17A5E] mb-6">
       , 404
      </p>
      <h1 className="font-serif text-white text-7xl lg:text-9xl font-light italic leading-none mb-6">
        Lost?
      </h1>
      <p className="font-sans text-white/50 text-base font-light max-w-sm leading-relaxed mb-12">
        This page doesn't exist, but AZAI and BRUME do. Let's get you back somewhere good.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-3 bg-[#C17A5E] hover:bg-[#8B4A30] text-white font-display text-[11px] font-semibold tracking-widest uppercase px-8 py-4 rounded-full transition-colors duration-300"
        >
          Back to Home
        </Link>
        <Link
          href="/azai"
          className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-white/50 text-white font-display text-[11px] font-semibold tracking-widest uppercase px-8 py-4 rounded-full transition-colors duration-300"
        >
          Explore AZAI
        </Link>
      </div>
    </main>
  );
}
