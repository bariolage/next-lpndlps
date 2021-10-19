const colors = require("tailwindcss/colors");

module.exports = {
 purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
 darkMode: false, // or 'media' or 'class'
 theme: {
  fontFamily: { sans: ['"dosis"', "sans-serif"] },
  extend: {
   fill: {
    blue: colors.cyan,
   },
   flex: { full: "1 0 100%" },
   typography: {
    DEFAULT: {
     css: {
      a: {
       color: "white",
       "&:hover": {
        opacity: 0.5,
       },
      },
      h3: {
       color: "inherit",
       fontSize: "1.5rem",
       lineHeight: "1.5rem",
       fontWeight: "bold",
       margin: "3rem 0",
       textAlign: "center",
       textTransform: "uppercase",
      },
      h4: {
       color: "inherit",
       lineHeight: "1.5rem",
       fontWeight: "bold",
       margin: "2rem 0",
       textAlign: "center",
       textTransform: "uppercase",
      },
      strong: {
       color: "inherit",
      },
     },
    },
   },
   colors: {
    blue: colors.cyan,
   },
   height: {
    128: "32rem",
    fit: "fit-content",
   },
   margin: {
    "1/2": "50vw",
    128: "32rem",
   },
   width: {
    half: "50vw",
   },
  },
 },
 variants: {
  extend: {},
 },
 plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
