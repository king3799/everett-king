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
          50: "#effcfb",
          100: "#d9f7f4",
          200: "#b5eee8",
          300: "#82ded5",
          400: "#4dcbbf",
          500: "#24b9ab",
          600: "#20a99c",
          700: "#1b8d83",
          800: "#176f68",
          900: "#125c56",
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
