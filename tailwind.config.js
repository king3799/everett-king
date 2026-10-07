export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        rose: {
          50: "#fff1f2",
          100: "#9beafb",
          200: "#c2fdfd",
          300: "#fda4af",
          400: "#fb7185",
          500: "#24b9ab",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
      },
      boxShadow: {
        "rose": "0 10px 15px -3px rgba(244, 63, 94, 0.1), 0 4px 6px -2px rgba(244, 63, 94, 0.05)",
        "rose-lg": "0 25px 50px -12px rgba(244, 63, 94, 0.25)",
      },
    },
  },
  plugins: [],
};
