//npx tailwindcss -i ./src/index.css -o ./dist/tailwind.css --watch
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      height: {
        128: "32rem",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
      }),
    },
  },
  plugins: [],
};
