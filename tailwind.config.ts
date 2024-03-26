import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { "primary-blue": "#1090CB", "secondary-blue": "#1090CB" },
      fontSize: {
        heading1: "40px",
      },
    },
  },
  plugins: [],
};
export default config;
