import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-orange": "#EBA82C",
        "red": "#FF132D",
        "light-black": "#1D1D1B",
        "light-grey": "#F5F5F5",
        "light-orange": "#FEBE32",
        "dark-grey": "#8F9090",
        "blue": "#009FE3",
      },
      fontFamily: {
        "source":  '"Source Sans 3", "sans-serif"',
      },
      fontSize: {
        "customSm": "21px",
        "customXxsm": "40px",
        "customXsm": "49px",
        "customXmd": "32px",
        "customXxmd": "35px",
        "customMd": "76px",
        "customLg": "80px",
        "customXl": "100px",
      },
      lineHeight: {
        "customSm": "100%",
        "customMd": "105%",
        "customXmd": "125%",
      },
      letterSpacing: {
        "customXmd": "0.28px",
        "customSm": "0.35px",
        "customMd": "0.66px"
      },
      backgroundImage: {
        "hero-bg-image": "url('/assets/images/webp/hero-bg.webp')",
      },

    },
  },
  plugins: [],
} satisfies Config;
