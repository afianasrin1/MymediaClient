/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mediaPlatform: {
        primary: "#0FCFEC",
        secondary: "#111a28",
        accent: "#3A4256",
        neutral: "#291334",
      },
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
