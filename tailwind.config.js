/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
         'xs' : {'max' : '320px'},
         'sm' : {'max' : '480px'},
         'md' : {'max' : '768px'},
         'lg' : {'max' : '1024px'},
         'xl' : {'max' : '1280px'},
      }
    },
  },
  plugins: [],
}

