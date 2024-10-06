import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      boxShadow: {
        custom: "4px 4px 24px 0px #00000073",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        inter: ["Inter", ...fontFamily.sans],
        pretendard: ["Pretendard", ...fontFamily.sans],
      },
      spacing: {
        page: "500px",
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
