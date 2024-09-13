import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        sans: ["Inter", ...fontFamily.sans],
        pretendard: ["Pretendard Variable", ...fontFamily.sans],
        roboto: ["Roboto Mono"],
      },
      spacing: {
        page: "500px",
      },
      colors: {
        kneutral: {
          DEFAULT: "#1f1f1f",
          11: "#1f1f1f",
          10: "#262626",
          300: "#2C2D30",
        },
        kactive: {
          DEFAULT: "#00EC97",
        },
        kmuted: {
          DEFAULT: "#bfbfbf",
        },
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
