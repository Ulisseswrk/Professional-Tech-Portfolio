export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        screens: {
          'max-1150': {'max': '1150px'},
        },
      },
    },
    plugins: [],
};