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
        background: "#0B0A0D",
        primary: "#E0E0E0",
        auxiliary: "#4E4462",
        section: "#3F3E41",
        constrast: "#F98532",
      },
    },
  },
  plugins: [],
};
export default config;
