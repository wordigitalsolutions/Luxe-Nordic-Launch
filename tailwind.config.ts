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
        luxe: {
          dark: "#09090b", // zinc-950 per il background principale
          gold: "#d97706", // amber-600 per bottoni e accenti
        }
      },
    },
  },
  plugins: [],
};
export default config;
