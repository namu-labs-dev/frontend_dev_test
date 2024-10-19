import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
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
      colors: {
        primaryBlue: "#1838E0",
        primaryGreen: "#00FF00",
        primaryRed: "#F5222D",
        faintAsh: "#8C8C8C",
        footerLink: "#777784",
        blogPopUp: "#475467",
      },
    },
  },
  plugins: [],
} satisfies Config;
