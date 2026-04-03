import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, WHATSAPP_URL } from "@/lib/constants";
import AnimateIn from "@/components/AnimateIn";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | AZAI × BRUME Journal`,
    description: post.excerpt,
    keywords: ["wellness Lebanon", "AZAI", "BRUME", post.tag.toLowerCase(), "Jal El Dib"],
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

const FULL_CONTENT: Record<string, string[]> = {
  "what-is-lagree": [
    "Lagree is a fitness method built on the Megaformer, a machine that looks like a Pilates reformer but works entirely differently. Where traditional workouts push you to move fast and heavy, Lagree slows everything down and keeps your muscles under constant tension.",
    "The result? A full-body burn that sculpts, strengthens, and challenges your cardiovascular system, all without pounding your joints. It's why professional athletes, dancers, and everyday people are obsessed with it.",
    "At AZAI, our Lagree classes run 50 minutes. You'll work every major muscle group using the Megaformer's carriage, springs, and straps. The slow, controlled tempo means each rep is doing exponentially more work than a traditional gym set.",
    "What makes it unique is the principle of 'time under tension.' When you spend 4–6 seconds on every movement, no momentum, no rest, your muscles have no choice but to adapt, reshape, and grow stronger.",
    "First class? Expect to shake. That trembling is your slow-twitch muscle fibers firing, the ones responsible for long-term endurance and that lean, defined look. It's a good sign. It means it's working.",
    "If you've been looking for a workout that delivers real results without the wear and tear, come try Lagree at AZAI. Your first class will tell you everything you need to know.",
  ],
  "sauna-benefits": [
    "The sauna has been a cornerstone of recovery culture for centuries, from Finnish saunas to Roman baths. But modern science is catching up with what people have known intuitively all along: regular heat exposure is one of the most powerful things you can do for your body and mind.",
    "Heat increases your core body temperature, which triggers a cascade of physiological responses. Your heart rate rises. Blood vessels dilate. Circulation improves. In a 15–20 minute sauna session, your body mimics the cardiovascular benefits of a moderate run.",
    "Growth hormone, the hormone responsible for muscle repair and fat metabolism, spikes dramatically during and after a sauna session. Studies show sessions at 80°C can increase GH levels by up to 300%.",
    "For mental health, the sauna is equally powerful. Heat exposure activates the release of endorphins and dynorphins, your brain's natural mood regulators. The comedown after a session has a mild euphoric quality that can last hours.",
    "At AZAI, our sauna is available for recovery days, post-workout wind-downs, or standalone sessions. We recommend 2–3 sessions per week, staying hydrated and spending 10–20 minutes per session.",
    "Recovery isn't laziness. It's where the transformation actually happens. Make the sauna part of your ritual.",
  ],
  "specialty-coffee-guide": [
    "Specialty coffee isn't just a trend, it's a completely different relationship with the cup. At BRUME, every coffee we serve starts with a single-origin bean, sourced from a specific farm, in a specific region, harvested in a specific season.",
    "The difference between specialty and commercial coffee is traceability. A commercial blend might mix beans from a dozen countries to achieve consistency. A specialty coffee celebrates what makes each origin unique, the altitude, the soil, the processing method.",
    "Let's break down what you'll see on our menu. An espresso is 18–20 grams of finely ground coffee, pushed through with 9 bars of pressure in about 25 seconds. Done right, it's sweet, complex, and syrupy, nothing like the bitter shot you might remember.",
    "A flat white is a double ristretto (a shorter, more concentrated pull) topped with velvety microfoam, milk steamed to 60°C with a texture like wet paint. It's smaller than a latte, more intense, and beautifully smooth.",
    "Our pour-overs are made to order, hot water poured by hand over ground coffee in slow, deliberate circles. It takes 3–4 minutes and produces a clean, nuanced cup that shows off the bean's natural character. For those who want to taste the coffee itself, this is the one.",
    "Come in and tell us what you're in the mood for. Our baristas at BRUME are passionate and happy to guide you through whatever stage of your coffee journey you're on.",
  ],
  "pilates-vs-yoga": [
    "People ask us this question constantly, and honestly, the answer depends entirely on what you're looking for. Both Pilates and yoga transform your relationship with your body. They just do it differently.",
    "Pilates, developed by Joseph Pilates in the early 20th century, is fundamentally about core stability, spinal alignment, and controlled movement. Every exercise is designed to build strength from the inside out, deep stabilizing muscles that rarely get attention in conventional training.",
    "Yoga is older, broader, and more philosophically rooted. Depending on the style, Vinyasa, Yin, Restorative, Ashtanga, it can be athletic and fiery or deeply meditative and slow. What unites all yoga is the emphasis on breath, presence, and the mind-body relationship.",
    "At AZAI, we teach both, and we see members transform on the mat through yoga in ways that complement their reformer work beautifully. The hip flexibility gained in yoga unlocks deeper range in Lagree. The core awareness from Pilates creates more stable, safer yoga postures.",
    "If you're choosing for the first time: Pilates tends to attract people who want structure, measurable progress, and physical results. Yoga tends to attract people who want to move in a way that feels intuitive, meditative, and restorative.",
    "Our honest advice? Try both. Your body will tell you what it needs, and often, it needs different things at different times.",
  ],
  "morning-routine": [
    "There's a version of the morning that most of our regulars have discovered, not planned, just stumbled into through habit and repetition. It starts early. It ends unhurried. And it sets a tone that holds the whole day.",
    "A 7AM Lagree or reformer class is the anchor. The studio is quiet at that hour. The group is small. The instructor knows your name. You're done by 8AM and you've already accomplished something real.",
    "The walk from AZAI to BRUME takes about two minutes. By 8:10, you're sitting with a flat white and something from the pastry case, a croissant, a banana bread, maybe a wellness bowl if you're hungry after the effort.",
    "This transition, from movement to stillness, from exertion to nourishment, is where something shifts. You're not rushing anywhere. The day hasn't made demands yet. You have a few minutes that are entirely yours.",
    "Our regular Layla described it once as 'the only time I feel like myself before the day tells me who to be.' That stuck with us.",
    "You don't need to book a 7AM class tomorrow. But if you're looking for a ritual that holds, this is the one our community keeps coming back to.",
  ],
  "hiit-beginners": [
    "HIIT, High-Intensity Interval Training, is exactly what it sounds like: short bursts of maximum effort, followed by brief recovery periods. It's efficient, challenging, and one of the most effective ways to build cardiovascular fitness and burn calories.",
    "At AZAI, our HIIT classes run 45 minutes. The format alternates between work intervals (usually 30–45 seconds) and active rest (15–20 seconds). You'll do things like burpees, squat jumps, mountain climbers, kettlebell swings, and rowing, depending on the day and the instructor.",
    "First class advice: don't try to keep up with the regulars. Seriously. Everyone in the room started where you are. Your goal for the first class is simple, finish it. Modify anything that feels too intense. Take extra rest when you need it.",
    "Wear training shoes with lateral support, not running shoes. Bring a towel, you will sweat. Have a bottle of water at your station. Arrive 5 minutes early to let the instructor know it's your first class; they'll keep an eye on your form.",
    "The second class is always better than the first. Your body knows what's coming, you know the movements, and your nervous system stops treating it as a threat. By class four or five, you'll start to feel the adaptation, more oxygen, faster recovery, more power.",
    "Book your first class at AZAI on WhatsApp. Tell us you're a beginner. We'll take care of the rest.",
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = FULL_CONTENT[slug] ?? [post.excerpt];
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="bg-[#FDFAF7] min-h-screen">
      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1210]/90 via-[#1C1210]/50 to-[#1C1210]/20" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 lg:px-0">
          <div className="max-w-3xl mx-auto w-full lg:px-0">
            <AnimateIn>
              <span className="inline-block font-display text-[9px] font-semibold tracking-widest uppercase text-[#C17A5E] bg-[#C17A5E]/15 border border-[#C17A5E]/30 px-3 py-1.5 rounded-full mb-5">
                {post.tag}
              </span>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="font-serif text-white text-4xl lg:text-6xl font-light italic leading-tight mb-4">
                {post.title}
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="flex items-center gap-4">
                <span className="font-display text-[9px] tracking-widest uppercase text-white/40">{post.date}</span>
                <span className="w-px h-3 bg-white/20" />
                <span className="font-display text-[9px] tracking-widest uppercase text-white/40">{post.readTime} read</span>
                <span className="w-px h-3 bg-white/20" />
                <span className="font-display text-[9px] tracking-widest uppercase text-white/40">AZAI × BRUME Journal</span>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <AnimateIn>
          <p className="font-serif text-[#1C1210] text-xl lg:text-2xl font-light italic leading-relaxed text-[#6B4F3A] mb-10 pb-10 border-b border-[#1C1210]/8">
            {post.excerpt}
          </p>
        </AnimateIn>

        <div className="space-y-6">
          {paragraphs.map((p, i) => (
            <AnimateIn key={i} delay={i * 0.04}>
              <p className="font-sans text-[#1C1210]/80 text-base leading-relaxed">{p}</p>
            </AnimateIn>
          ))}
        </div>

        {/* WhatsApp CTA inline */}
        <AnimateIn delay={0.2}>
          <div className="mt-14 p-8 bg-[#1C1210] rounded-2xl text-center">
            <p className="font-serif text-white text-2xl font-light italic mb-3">Ready to experience it?</p>
            <p className="font-sans text-white/50 text-sm font-light mb-6">Book a class at AZAI or visit BRUME in Jal El Dib.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#C17A5E] hover:bg-[#8B4A30] text-white font-display text-[11px] font-semibold tracking-widest uppercase px-7 py-3.5 rounded-full transition-colors duration-300"
            >
              Book on WhatsApp →
            </a>
          </div>
        </AnimateIn>

        {/* Back link */}
        <AnimateIn delay={0.1}>
          <div className="mt-10">
            <Link href="/blog" className="font-display text-[10px] font-semibold tracking-widest uppercase text-[#A08060] hover:text-[#C17A5E] transition-colors">
              ← Back to Journal
            </Link>
          </div>
        </AnimateIn>
      </section>

      {/* ── RELATED POSTS ── */}
      <section className="border-t border-[#1C1210]/8 bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <p className="font-display text-[9px] font-semibold tracking-[0.4em] uppercase text-[#A08060] mb-10">More to Read</p>
          </AnimateIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((r, i) => (
              <AnimateIn key={r.slug} delay={i * 0.08}>
                <Link href={`/blog/${r.slug}`} className="group block">
                  <div className="relative h-44 rounded-xl overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${r.image})` }} />
                    <div className="absolute inset-0 bg-[#1C1210]/30" />
                  </div>
                  <h3 className="font-serif text-[#1C1210] text-lg font-light italic leading-snug group-hover:text-[#C17A5E] transition-colors">{r.title}</h3>
                  <p className="font-display text-[8px] tracking-widest uppercase text-[#A08060] mt-2">{r.readTime} read →</p>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
