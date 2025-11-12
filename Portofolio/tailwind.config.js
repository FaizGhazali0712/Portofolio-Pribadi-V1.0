/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // Tambahkan baris ini agar Tailwind memindai file-file React Anda
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}