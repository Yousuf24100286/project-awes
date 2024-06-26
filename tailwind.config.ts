import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFCF7",
        primary: {
          DEFAULT: "#19615C",
          100: "#D1DFDE",
          200: "#BAD0CE",
          300: "#A3C0BE",
          400: "#8CB0AE",
          500: "#19615C",
          600: "#175753",
          700: "#144E4A",
          800: "#124440",
          900: "#0F3A37",
        },
        secondary: {
          DEFAULT: "#05299E",
          100: "#CCD6E0",
          200: "#B3C2D1",
          300: "#99ADC1",
          400: "#8099B2",
          500: "#05299E",
          600: "#012D5B",
          700: "#012851",
          800: "#012347",
          900: "#011E3D",
        },
        accent1: {
          DEFAULT: "#450E1D",
          100: "#DACFD2",
          200: "#C7B7BB",
          300: "#B59FA5",
          400: "#A2878E",
          500: "#450E1D",
          600: "#3E0D1A",
          700: "#370B17",
          800: "#300A14",
          900: "#290811",
        },
        accent2: {
          DEFAULT: "#F9C74F",
          100: "#FEFAEB",
          200: "#FDF7E1",
          300: "#FCF4D7",
          400: "#FCF2CD",
          500: "#F9C74F",
          600: "#DFCD8C",
          700: "#C6B67C",
          800: "#AEA06D",
          900: "#95895D",
        },
      },
    },
  },
  plugins: [],
};
export default config;
