import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        mono: ["var(--font-montserrat)"],
      },
      screens: {
        mob: { max: "391px" },
        sm: { min: "392px", max: "775px" },
        md: { min: "776px", max: "1201px" },
        lg: { min: "1202px", max: "1539px" },
        xl: { min: "1540px" },
      },
    },
  },
  plugins: [],
};
export default config;
