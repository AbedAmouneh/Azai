import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AZAI × BRUME: Wellness Studio & Coffee Bar · Jal El Dib, Lebanon",
    template: "%s | AZAI × BRUME",
  },
  description:
    "AZAI is a premium wellness studio in Jal El Dib, Lebanon offering Lagree, Reformer Pilates, HIIT, Yoga, Sauna & Massage. Inside, BRUME Coffee Bar serves specialty coffee, pastries, and salads daily from 7AM.",
  keywords: [
    "AZAI", "BRUME", "wellness studio Lebanon", "Lagree Jal El Dib",
    "Pilates Beirut", "coffee bar Jal El Dib", "HIIT Lebanon",
    "yoga Beirut", "sauna Lebanon", "fitness studio Jal El Dib",
  ],
  openGraph: {
    title: "AZAI × BRUME: Wellness Studio & Coffee Bar",
    description: "Move. Recover. Savor. A space for movement and self-care in Jal El Dib, Lebanon.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
