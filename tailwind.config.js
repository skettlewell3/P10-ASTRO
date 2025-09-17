/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        bluebrand: "rgb(28, 44, 91)",
        greenbrand: "rgb(32, 100, 60)",
      },
    },
  },
  plugins: [],
}