export const WHATSAPP_NUMBER = "96171607705";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_NUMBER = "+961 71 607 705";
export const INSTAGRAM_AZAI = "https://www.instagram.com/azaiexperience";
export const INSTAGRAM_BRUME = "https://www.instagram.com/brumecoffeebar";
export const LOCATION = "Jal El Dib, Lebanon";
export const MAPS_URL = "https://maps.app.goo.gl/ENcbiCwGNVDoVs5p8";

// ---------------------------------------------------------------------------
// Site images — real photos from @azaiexperience and @brumecoffeebar
// Source files live in /public/instagram/
// ---------------------------------------------------------------------------
export const IMAGES = {
  // AZAI — hero & split
  azaiHero:       "/instagram/azai-14.jpg",   // instructor + student on Megaformer, cinematic action
  azaiSplit:      "/instagram/azai-28.jpg",   // rows of Megaformer machines, atmospheric studio

  // AZAI — service cards
  azaiLagree:     "/instagram/azai-1.png",    // Lagree class in session, multiple people on machines
  azaiReformer:   "/instagram/azai-23.jpg",   // empty reformer room, herringbone floor, natural light
  azaiMat:        "/instagram/azai-25.jpg",   // mat pilates room setup with mats and dumbbells
  azaiHotSculpt:  "/instagram/azai-18.jpg",   // woman focused intensely on Megaformer, close-up
  azaiHiit:       "/instagram/azai-16.jpg",   // woman lunging on Megaformer, high-energy action
  azaiYoga:       "/instagram/azai-24.jpg",   // relaxation bench + wabi-sabi decor, meditative
  azaiSauna:      "/instagram/azai-11.jpg",   // sauna golden heat glow, atmospheric
  azaiMassage:    "/instagram/azai-26.jpg",   // massage treatment room, palm plant, warm moody light

  // BRUME — hero & split
  brumeHero:      "/instagram/brume-1.jpg",   // top-down iced rose coffee, dark and cinematic
  brumeSplit:     "/instagram/azai-6.jpg",    // outdoor patio with lemon trees, inviting atmosphere

  // BRUME — menu & story
  brumeCoffee:    "/instagram/brume-9.jpg",   // barista in BRUME apron presenting iced coffee
  brumePastry:    "/instagram/azai-5.jpg",    // pain au chocolat + coffee mug, warm morning light
  brumeSalad:     "/instagram/brume-5.jpg",   // BRUME matcha latte, wellness/healthful
  brumeInterior:  "/instagram/azai-10.jpg",   // aerial view of outdoor patio, full venue overview

  // Blog articles
  blogLagree:     "/instagram/azai-19.jpg",   // LAGREE branded machine close-up
  blogSauna:      "/instagram/azai-11.jpg",   // sauna heat glow
  blogCoffee:     "/instagram/brume-2.jpg",   // BRUME branded iced coffee, dark background
  blogYoga:       "/instagram/azai-24.jpg",   // meditative wabi-sabi space
  blogMorning:    "/instagram/azai-9.jpg",    // croissant + latte morning table, perfect morning ritual
  blogHiit:       "/instagram/azai-16.jpg",   // woman lunging on Megaformer, HIIT energy
};

export const AZAI_SERVICES = [
  {
    id: "lagree",
    icon: "01",
    name: "Lagree Megaformer",
    badge: "Signature",
    description: "Slow, controlled, full-body burn on the Megaformer. Low impact, maximum results. This is where legends are made.",
    image: IMAGES.azaiLagree,
  },
  {
    id: "reformer",
    icon: "02",
    name: "Reformer Pilates",
    badge: "Popular",
    description: "Precision, control, and strength. Sculpt long, lean muscles while restoring balance. If it involves Pilates, it's always a yes.",
    image: IMAGES.azaiReformer,
  },
  {
    id: "mat",
    icon: "03",
    name: "Mat Pilates",
    badge: "All Levels",
    description: "Go back to basics. Mat classes build deep core strength and body awareness, powerful in their simplicity.",
    image: IMAGES.azaiMat,
  },
  {
    id: "hot-sculpt",
    icon: "04",
    name: "Hot Sculpt",
    badge: "Intense",
    description: "High heat, high stakes. Sculpt and sweat simultaneously. The kind of class you talk about for days.",
    image: IMAGES.azaiHotSculpt,
  },
  {
    id: "hiit",
    icon: "05",
    name: "HIIT",
    badge: "High Energy",
    description: "Burn calories, build power, leave everything on the floor. Find your pace. Move with purpose.",
    image: IMAGES.azaiHiit,
  },
  {
    id: "yoga",
    icon: "06",
    name: "Yoga",
    badge: "Restorative",
    description: "Connect breath to movement. From flow to restorative, our yoga grounds you and opens space in both body and mind.",
    image: IMAGES.azaiYoga,
  },
  {
    id: "sauna",
    icon: "07",
    name: "Sauna",
    badge: "Recovery",
    description: "Sometimes the body needs to sweat what the mind is holding. Breathe. Release. Don't rush your recovery.",
    image: IMAGES.azaiSauna,
  },
  {
    id: "massage",
    icon: "08",
    name: "Massage Therapy",
    badge: "Care",
    description: "Professional, therapeutic massage to melt tension and accelerate recovery. An experience of wellness, care, and balance.",
    image: IMAGES.azaiMassage,
  },
];

export const BRUME_MENU = [
  {
    category: "Coffee",
    icon: "Coffee",
    items: [
      { name: "Espresso", desc: "Single origin, pulled with intention" },
      { name: "Flat White", desc: "Velvety microfoam on a double ristretto" },
      { name: "Cold Brew", desc: "Slow steeped, smooth finish" },
      { name: "Pour Over", desc: "For those who savor the process" },
      { name: "Matcha Latte", desc: "Ceremonial grade, oat or whole milk" },
    ],
  },
  {
    category: "Pastries",
    icon: "Pastries",
    items: [
      { name: "Butter Croissant", desc: "Freshly baked, laminated daily" },
      { name: "Pain au Chocolat", desc: "Dark chocolate, flaky layers" },
      { name: "Banana Bread", desc: "Moist, house-made, slightly sweet" },
      { name: "Almond Tart", desc: "Crisp shell, frangipane filling" },
    ],
  },
  {
    category: "Salads & Bowls",
    icon: "Salads",
    items: [
      { name: "Wellness Bowl", desc: "Grains, greens, roasted veg, tahini" },
      { name: "Quinoa Salad", desc: "Herbs, citrus, pomegranate, feta" },
      { name: "Avocado Toast", desc: "Sourdough, chili flakes, lemon zest" },
      { name: "Protein Bowl", desc: "Grilled chicken, greens, seeds, dressing" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    text: "AZAI changed the way I think about working out. The Lagree classes are unlike anything else in Beirut. And BRUME after? Absolute perfection.",
    name: "Layla M.",
    detail: "Lagree Member",
    initial: "L",
  },
  {
    text: "I come for the sauna after every session. The energy here is different, it's a community, not just a gym. The coffee at BRUME is honestly the best I've had.",
    name: "Rami K.",
    detail: "Unlimited Member",
    initial: "R",
  },
  {
    text: "The reformer classes are so well-taught. You walk in carrying the day, you walk out lighter. I say this every time and it never stops being true.",
    name: "Nour A.",
    detail: "Reformer & Yoga · 6 months",
    initial: "N",
  },
  {
    text: "BRUME's pour-over coffee paired with the quinoa salad after a hot sculpt class is the ritual I didn't know I needed. Addicted.",
    name: "Sarah J.",
    detail: "Hot Sculpt & BRUME regular",
    initial: "S",
  },
  {
    text: "As a personal trainer myself, I respect the quality of instruction here. Dee's Lagree class is elite. Don't miss it.",
    name: "Omar B.",
    detail: "Fitness Professional",
    initial: "O",
  },
  {
    text: "My mornings start at BRUME, my evenings end at AZAI. This place became part of my identity in Jal El Dib.",
    name: "Maya H.",
    detail: "Daily visitor",
    initial: "M",
  },
];

export const BLOG_POSTS = [
  {
    slug: "what-is-lagree",
    title: "What Is Lagree? The Low-Impact Workout That Changed Everything",
    excerpt: "If you've been searching for a workout that sculpts, burns, and transforms, without destroying your joints, Lagree is your answer.",
    date: "March 28, 2025",
    readTime: "4 min",
    tag: "Movement",
    image: IMAGES.blogLagree,
  },
  {
    slug: "sauna-benefits",
    title: "5 Reasons Sauna Should Be Part of Your Recovery Routine",
    excerpt: "The body needs to sweat what the mind is holding. Here's the science and practice behind making sauna a weekly ritual.",
    date: "March 14, 2025",
    readTime: "5 min",
    tag: "Recovery",
    image: IMAGES.blogSauna,
  },
  {
    slug: "specialty-coffee-guide",
    title: "A Beginner's Guide to Specialty Coffee, From BRUME's Baristas",
    excerpt: "What's the difference between a flat white and a latte? What does 'single origin' mean? Our team at BRUME breaks it down.",
    date: "March 5, 2025",
    readTime: "3 min",
    tag: "Coffee",
    image: IMAGES.blogCoffee,
  },
  {
    slug: "pilates-vs-yoga",
    title: "Pilates vs Yoga: Which One Is Right for You?",
    excerpt: "Both transform your body and calm your mind, but they do it differently. Here's how to choose, or better yet, how to do both.",
    date: "February 20, 2025",
    readTime: "5 min",
    tag: "Wellness",
    image: IMAGES.blogYoga,
  },
  {
    slug: "morning-routine",
    title: "The Perfect Morning Routine: Move at AZAI, Sip at BRUME",
    excerpt: "A class at 7AM, a pour-over at 8:30. Here's how our regulars structure the morning that sets their whole day up.",
    date: "February 10, 2025",
    readTime: "4 min",
    tag: "Lifestyle",
    image: IMAGES.blogMorning,
  },
  {
    slug: "hiit-beginners",
    title: "HIIT for Beginners: What to Expect at Your First Class",
    excerpt: "Walking into a HIIT class for the first time can feel daunting. Here's exactly what happens, what to bring, and how to get through it.",
    date: "January 28, 2025",
    readTime: "4 min",
    tag: "Movement",
    image: IMAGES.blogHiit,
  },
];
