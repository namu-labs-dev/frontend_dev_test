import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      borderRadius: {
        common: "0.625rem",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        black_spread: "4px 5px 0px 1px",
      },
      spacing: {
        page: "500px",
      },
      // colors: {
      //   "base-green": {
      //     DEFAULT: "#00FF00",
      //   },
      //   "base-blue": {
      //     DEFAULT: "#1838E0",
      //   },
      // },
      colors: {
        "base-green": {
          DEFAULT: "#00FF00",
        },
        "base-blue": {
          DEFAULT: "#1838E0",
        },
        "faintAsh:": {
          DEFAULT: "#8C8C8C",
        },
        footerLink: {
          DEFAULT: "#777784",
        },
        blogPopUp: {
          DEFAULT: "#475467",
        },
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
      boxShadow: {
        customShadow: "7px 6px 5px 0px rgba(0,0,0,0.76)",
      },
    },
  },
  plugins: [],
} satisfies Config;
