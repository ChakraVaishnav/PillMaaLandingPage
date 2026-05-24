import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pillmaa: {
          primary: "#1a7a4a",
          light: "#eaf5ef",
          dark: "#0d4f2e",
          warm: "#f97316",
          ink: "#0f172a",
          muted: "#64748b",
          surface: "#f8fafc",
          border: "#e2e8f0",
        },
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(26, 122, 74, 0.2)",
        premium: "0 24px 70px rgba(15, 23, 42, 0.12)",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ticker: "ticker 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
