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
      },
      fontFamily: {
        "source":  '"Source Sans 3", "serif"',
      },
      fontSize: {
        "customSm": "21px",
        "customMd": "76px",
      }

    },
  },
  plugins: [],
} satisfies Config;
