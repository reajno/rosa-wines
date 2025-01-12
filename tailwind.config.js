/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bittersweet: {
          50: "#fef3f2",
          100: "#fee5e2",
          200: "#fdd1cb",
          300: "#fbb0a6",
          400: "#f57160",
          500: "#ed5946",
          600: "#da3c28",
          700: "#b72f1e",
          800: "#972b1d",
          900: "#7e291e",
          950: "#44120b",
        },
      },
    },
  },
  plugins: [],
};
