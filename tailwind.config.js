/** @type {import('tailwindcss').Config} */

const units = {
  1: "2px",
  2: "4px",
  3: "8px",
  4: "12px",
  5: "16px",
  6: "24px",
  7: "32px",
  8: "48px",
};

module.exports = {
  content: ["./**/*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      heading: ["Outfit", "sans-serif"],
      body: ["Proxima Nova", "sans-serif"],
    },
    spacing: {
      ...units,
      0: "0",
      auto: "auto",
      full: "100%",
      screen: "100vh",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        black: "#222528",
        blue: {
          700: "#0f8afc",
        },
        gray: {
          100: "#fcfcfc",
          500: "#b5b6bc",
        },
        green: {
          700: "#00b131",
        },
        red: {
          500: "#ef4444",
          600: "#dc2626",
        },
        yellow: {
          700: "#ffd74a",
        },
        white: "#ffffff",
      },
      fontSize: {
        base: ["16px", "22px"],
        md: ["18px", "24px"],
        lg: ["20px", "26px"],
        xl: ["24px", "28px"],
        "2xl": ["26px", "30px"],
        "3xl": ["28px", "32px"],
        "4xl": ["36px", "40px"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
};
