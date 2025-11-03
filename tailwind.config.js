export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // enable class-based dark mode
  darkMode: 'class',
    theme: {
      extend: {
        screens: {
          'max-1150': {'max': '1150px'},
        },
      },
    },
    plugins: [],
};