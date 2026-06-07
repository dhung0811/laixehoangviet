import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001736",
        "primary-mid": "#002b5b",
        gold: "#fdc345",
        "gold-light": "#f6be3f",
        "bg-light": "#eff4ff",
        "bg-lighter": "#f8fafc",
      },
      fontFamily: {
        display: ["var(--font-abril)", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
