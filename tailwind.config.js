//npx tailwindcss -i ./src/index.css -o ./dist/tailwind.css --watch
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
      height: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
