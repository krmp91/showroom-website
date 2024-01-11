import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      darkGreen: "#3A4E55",
      darkOrange: "#B4832C",
      darkOrangeHover: "#AB7D2C",
      blueLight: "#F1F3F8",
      lightPink: "#F7EDEC",
      roseGray: "#B4A9A9",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
      display: ["Open Sans"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "0.98rem",
      lg: "1.15rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.5rem",
    },
    extend: {
      width: {
        "1/3-g": "30%",
      },
      minHeight: {
        50: "55px",
      },
      boxShadow: {
        footer: "0px -7px 41px 3px rgba(175, 175, 175, 0.25)",
        inset: "0 0 10px rgba(0, 0, 0, 0.5)",
        custom:
          "-34rem 20px 3px -0px #B4A9A9, 76rem 6px 0px 0px #B4A9A9, 5px 1px 2px 0.5px rgba(000, 000, 000, 0.10)",
      },
      backgroundImage: {
        parallax: 'url("/images/feel-free-to-reach-out.jpg")',
        header:
          "linear-gradient(98.85deg, #B4A9A9 7.8%, rgba(239, 252, 255, 0) 139.35%);",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      flexBasis: {
        "4/5": "66%",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};

export default config;
