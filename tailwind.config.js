module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
      backgroundImage: {
        "black-background": "url('/bg_4.jpg')",
      },
      colors: {
        primary: "#0C3B2E",
        secondary: "#C49B63",
        lighter_green: "#6D9773",
        bright_yellow: "#FFBA00",
      },
      fontFamily: {
        primary: ["Poppins", "serif"],
        secondary: ["Great Vibes", "cursive"],
        prata: ["Prata", "sans-serif"],
        josephin: ["Josefin Sans", "sans-serif"],
        playfair_display: ["Playfair Display", "sans-serif"],
        open_sans: ["Open Sans", "sans-serif"],
      },
      flex: {
        "1/4": "1 1 25%",
        "1/3": "1 1 33%",
        "1/2": "1 1 50%",
      },
      keyframes: {
        headerScrollDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        headerScrollUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)", visibility: "hidden" },
        },
      },
      animation: {
        headerScrollDown: "headerScrollDown 0.2s linear",
        headerScrollUp: "headerScrollUp 0.5s linear",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
