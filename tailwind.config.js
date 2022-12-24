module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(35px, -55px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-25px, 25px) scale(0.8)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
    require('tailwindcss-rtl'),
    require('tailwindcss-animation-delay'),
  ],

  daisyui: {
    themes: [
      'black',
      'lemonade',
      'coffee',
      'pastel',
      'retro',
      {
        darktheme: {
          primary: '#0284C7',
          secondary: '#1FD65F',
          accent: '#c1f5fe',
          neutral: '#110E0E',
          'base-100': '#737473',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
        wireframe: {
          ...require('daisyui/src/colors/themes')['[data-theme=wireframe]'],
          primary: '#1b90cd',
          secondary: '#35da6f',
          'primary-content': 'white',
        },
        colors: {
          gold: '#BAA333',
          silver: '#c0c0c0',
        },
      },
    ],
  },
}
