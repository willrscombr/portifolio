module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        keyframes: {
            wiggle_left: {
                '0%, 100%': {
                    transform: 'rotate(-3deg)'
                },
                '50%': {
                    transform: 'rotate(3deg)'
                },
            },
            wiggle_right: {
                '0%, 100%': {
                    transform: 'rotate(-3deg)'
                },
                '50%': {
                    transform: 'rotate(3deg)'
                },
            }
        },
        animation: {
            wiggle_left: 'wiggle_left 1s ease-in-out infinite',
            wiggle_right: 'wiggle_right 1s ease-in-out infinite',
        }
    },
},
  plugins: [],
}
