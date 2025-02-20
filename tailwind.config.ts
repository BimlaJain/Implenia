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
        "dark-grey": "#8F9090"
      },
      fontFamily: {
        "source":  '"Source Sans 3", "sans-serif"',
      },
      fontSize: {
        "customSm": "21px",
        "customXsm": "49px",
        "customXmd": "32px",
        "customMd": "76px",
        "customLg": "80px",
        "customXl": "100px",
      }

    },
  },
  plugins: [],
} satisfies Config;
