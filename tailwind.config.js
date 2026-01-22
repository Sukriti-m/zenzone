/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "circle-pattern":
          "linear-gradient(59deg,rgba(239,161,143,.44) 27%,rgba(239,161,143,.53) 50%,rgba(98,72,255,.41) 75%)",
        "black-before": "linear-gradient(180deg,hsla(0,0%,100%,0),#111)",
        "trans-text":
          "linear-gradient(45deg, #ff5353, #e74d67, #b87ce5, #a16ced, #ba6ebf, #B3697E, #C0815E, #ffc747);",
        "bottom-trans":
          "background: linear-gradient(0deg, rgba(0,0,1,1) 0%, rgba(255,255,255,0.022373915386467047) 100%);",
        box: "url('/src/assets/images/boxes.svg');",
      },
      colors: {
        thBlack: "#333",
        thBrick: "#efa18f",
        thGray: "#707070",
        thDark: "#4e4e4e",
        thNone: "#00ffff00",
        thPurple: "#6f6fb6",
        thWhitetrans: "#ffffffa3",
        thGlass: "rgba( 255, 255, 255, 0.25 )",
        thNone: "#fff0",
      },
      gridColumn: {
        column2: "grid-column: 2",
      },
      fontFamily: {
        solata: "Inconsolata",
        circula: "Circula",
        circulaTit: "CirculaTit",
        circulaBold: "CirculaBold",
      },
    },
  },

  plugins: [],
};
