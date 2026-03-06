import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#fbfbfb",
        foreground: "#111827"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17, 24, 39, 0.12)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)", opacity: "0.75" },
          "50%": { transform: "translateY(-25px) rotate(6deg)", opacity: "1" }
        },
        marqueeUp: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" }
        },
        pulseBurst: {
          "0%": { transform: "scale(0.4)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "scale(1.2)", opacity: "0" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        marqueeUp: "marqueeUp 22s linear infinite",
        pulseBurst: "pulseBurst 0.85s ease-out"
      }
    }
  },
  plugins: []
};

export default config;
