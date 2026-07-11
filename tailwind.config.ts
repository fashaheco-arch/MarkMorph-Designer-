import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          50: "#EEF0FD",
          100: "#DDE0FB",
          400: "#7C76EF",
          500: "#4F46E5",
          600: "#3F35CB",
          700: "#332AA3",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          500: "#7C3AED",
          600: "#6B2FD4",
        },
        accent: {
          DEFAULT: "#06B6D4",
          500: "#06B6D4",
          600: "#0596AD",
        },
        surface: "#F8FAFC",
        ink: {
          DEFAULT: "#111827",
          900: "#0F172A",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #4F46E5 0%, #7C3AED 55%, #06B6D4 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, rgba(79,70,229,0.10) 0%, rgba(124,58,237,0.10) 55%, rgba(6,182,212,0.10) 100%)",
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.25), transparent 60%)",
        "grain": "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.035\"/></svg>')",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(79, 70, 229, 0.35)",
        card: "0 10px 30px -10px rgba(15, 23, 42, 0.12)",
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px -15px rgba(124,58,237,0.45)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        marquee: "marquee 30s linear infinite",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
