/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: ({ colors }) => ({
      lime: colors.lime,
      white: "white",
    }),
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "system-ui"],
        serif: ['"DM Serif Text"', "Georgia"],
      },
      colors: {
        verde: {
          200: "#acef75",
          300: "#91EE77",
          900: "#16281F",
          950: "#0F1C15",
        },
        green: {
          300: "#91EE77",
        },
      },
      spacing: {
        22: "22rem",
      },
      fontSize: {
        xl: ["1.25rem", { lineHeight: "1.5rem" }],
        "2xs": ".5rem",
      },
      gridTemplateColumns: {
        "1/2": "1fr 2fr",
      },
      screens: {
        xs: "380px",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(-20%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        slideIn: "slideIn .3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
