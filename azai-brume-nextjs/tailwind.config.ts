import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        azai: {
          primary: "#C17A5E",
          dark:    "#8B4A30",
          deeper:  "#5C2D14",
          light:   "#E8C5B0",
          bg:      "#F9F0E8",
          hero:    "#1A0F0A",
        },
        brume: {
          primary: "#D4A574",
          dark:    "#8B6340",
          cream:   "#FBF5EE",
          brown:   "#5C3D2E",
          hero:    "#2C1A10",
        },
        ink: {
          DEFAULT: "#1C1210",
          medium:  "#6B4F3A",
          light:   "#A08060",
          faint:   "#D4C4B4",
        },
      },
      fontFamily: {
        serif:  ["var(--font-cormorant)", "Georgia", "serif"],
        sans:   ["var(--font-inter)", "system-ui", "sans-serif"],
        display:["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        cinematic: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
