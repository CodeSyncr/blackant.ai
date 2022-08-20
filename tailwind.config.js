/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fracBold:"'fractual-bold'",
        fracLight:"'fractual-light'",
        fracMedium:"'fractual-medium'",
        fracRegular:"'fractual-regular'",
        manrBold:"'manrope-bold'",
        manrExtraBold:"'manrope-extrabold'",
        manrExtraLight:"'manrope-extralight'",
        manrLight:"'manrope-light'",
        manrMedium:"'manrope-medium'",
        manrRegular:"'manrope-regular'",
        manrSemiBold:"'manrope-semibold'",
      },
      colors:{
        baScrnBlack:"#000",
        baBlack:"#484847",
        baWhite:"#fff",
        baOrange:"#FF9866",
        baCream : "#F9F5EE",
        
      }
    },
    
  },
  plugins: [],
}
