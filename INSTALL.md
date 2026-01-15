import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DC2626",      // red-600 (Starcine)
        primaryHover: "#EF4444", // red-500
        secondary: "#7F1D1D",    // red-900
        accent: "#22C55E",       // green-500
      },
    },
  },
  plugins: [],
}

export default config

