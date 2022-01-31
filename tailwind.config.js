module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
};
