/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontsFamily: {
        sans: ["Irish Grover", "Squada One", "Slackey", "Satisfy", "Spline Sans"],
      },

      colors: {
        brown: '#291D15',
        caramel: '#683C0E',
        orange: '#DD7100',
        yellowOrange: '#E09627',
        red: '#E32020',
        redLight: '#CF2C2C',
        gray: '#8A8A8A',
        grey: '#ABA5A5',
        blue: '#3183FF',
        blueLight: '#4F95FF',
        pink: '#FF1CDB',
        pinkLight: '#FF64E6',
        grayNormal: '#4B4B4B',
        grayLight: '#828282',
        yellow: '#FEC810',
        green: '#62C041',
      }
    },
  },
  plugins: [],
}
