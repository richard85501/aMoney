//npx tailwindcss -i ./src/index.css -o ./dist/tailwind.css --watch
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          001: '#FF6363',
        },
      },
      height: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
