module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Redressed"],
    },
    minWidth: {
      350: "350px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
