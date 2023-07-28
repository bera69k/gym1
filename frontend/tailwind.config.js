/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '23': '100px',
        '350': '350px',
        'scr': '1100px'
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))'
      },
      backgroundImage:{
        'david': 'url(../assets/david.jpg)'
      },
      width:{
        '350': '350px',
        '380': '380px'
      },
      colors:{
        'gold': '#FFD700',
        'shade': '#1B1212'
      },
      fontFamily: {
        oswald: ['"Oswald"',]
      },
      animation:{
        left: 'left 1.5s ease-out'
      },
      keyframes:{
        left: {
          '0%':{
          opacity: '0',
          transform: 'translateX(1000px)'
        },
        '80%':{
          transform: 'translateX(-30px)'
        },
        '100%':{
          transform: 'translateX(0)'
        }
      }
    }
    },
  },
  plugins: [],
}

