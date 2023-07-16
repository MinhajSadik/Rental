/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3267B1",
        primaryHov: "#285593",
        secondary: "#2C3849",
        secondaryHov: "#1C2430",
      }
    },
  },
  plugins: [],
};
