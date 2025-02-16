import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#EE2B69",
        "color-logout": "#EF4444",
        "color-primary-fade": "#FFE8F0",
      },
      boxShadow: {
        "pitch-card": "5px 5px  #000000",
        "pitch-card-hover": "5px 5px  #EE2B69",
      },
      screens: {
        sml: "700px",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
