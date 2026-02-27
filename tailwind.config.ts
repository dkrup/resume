import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"]
      },
      colors: {
        background: "#020617",
        foreground: "#e5e7eb"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.22) 1px, transparent 0)",
        "brand-gradient":
          "linear-gradient(135deg, #0ea5e9, #6366f1, #22c55e)"
      }
    }
  },
  plugins: []
};

export default config;

