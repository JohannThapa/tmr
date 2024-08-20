// const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
module.exports = {
  prefix: '',
  mode: 'jit',
  important: false,
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-down': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
        bounce: {
          '20%, 50%, 80%, 100%': { transform: 'scale(1, 1)' },
          '40%': { transform: 'scale(1.75, 0.65)' },
          '45%': { transform: 'scale(1.75, 0.65)' },
          '70%': { transform: 'scale(1.25, 0.75)' },
          '90%': { transform: 'scale(1.15, 0.85)' },
        },
        'bounce-1': {
          '20%, 50%, 80%, to': { transform: 'scale(1, 1)' },
          '40%': { transform: 'scale(1.75, 0.65)' },
          '45%': { transform: 'scale(1.75, 0.65)' },
          '70%': { transform: 'scale(1.25, 0.75)' },
          '90%': {
            transform: 'scale(1.15, 0.85)',
            textShadow:
              '0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc, 0 50px 25px rgba(0, 0, 0, 0.2)',
          },
        },
        morphing: {
          '0%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', boxShadow: '15px 15px 50px rgba(0, 0, 0, 0.2)' },
          '25%': { borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%' },
          '50%': { borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%', boxShadow: '-10px -5px 50px rgba(0, 0, 0, 0.2)' },
          '75%': { borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%' },
        },
        moveInCircle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        moveVertical: {
          '0%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        moveHorizontal: {
          '0%': { transform: 'translateX(-50%) translateY(-10%)' },
          '50%': { transform: 'translateX(50%) translateY(10%)' },
          '100%': { transform: 'translateX(-50%) translateY(-10%)' },
        },
        // text-a2
        show: {
          '0%': { marginTop: '-270px' },
          '5%': { marginTop: '-180px' },
          '33%': { marginTop: '-180px' },
          '38%': { marginTop: '-90px' },
          '66%': { marginTop: '-90px' },
          '71%': { marginTop: '0px' },
          '99.99%': { marginTop: '0px' },
          '100%': { marginTop: '-270px' },
        },
        // button-a1
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '5%': { transform: 'rotate(18deg)' },
          '10%': { transform: 'rotate(36deg)' },
          '15%': { transform: 'rotate(54deg)' },
          '20%': { transform: 'rotate(72deg)' },
          '25%': { transform: 'rotate(90deg)' },
          '30%': { transform: 'rotate(108deg)' },
          '35%': { transform: 'rotate(126deg)' },
          '40%': { transform: 'rotate(144deg)' },
          '45%': { transform: 'rotate(162deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '55%': { transform: 'rotate(198deg)' },
          '60%': { transform: 'rotate(216deg)' },
          '65%': { transform: 'rotate(234deg)' },
          '70%': { transform: 'rotate(252deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '80%': { transform: 'rotate(288deg)' },
          '85%': { transform: 'rotate(306deg)' },
          '90%': { transform: 'rotate(324deg)' },
          '95%': { transform: 'rotate(342deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }

      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        bounce: 'bounce 1s linear infinite',
        bounceSlow: 'bounce-1 1.5s cubic-bezier(0.1, -0.6, 0.2, 0) infinite',
        morphing: 'morphing 10s infinite',
        moveInCircle: 'moveInCircle 20s reverse infinite',
        moveVertical: 'mov  eVertical 40s ease infinite',
        moveHorizontal: 'moveHorizontal 40s ease infinite',
        'fade-in-down': 'fade-in-down 0.3s ease-out',
        'fade-out-down': 'fade-out-down 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.3s ease-out',
        'fade-out-up': 'fade-out-up 0.3s ease-out',
        show: 'show 6s linear infinite', // text-a2
        'btn-a1': 'rotate 5s linear infinite', // button-a1
      },
      boxShadow: {
        custom: '0px 0px 50px 0px rgb(82 63 105 / 15%)',
        default: '15px 15px 50px rgba(0, 0, 0, 0.2)',
        inverted: '-10px -5px 50px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        custom: '30% 70% 70% 30% / 30% 30% 70% 70%',
        'morph-1': '58% 42% 75% 25% / 76% 46% 54% 24%',
        'morph-2': '50% 50% 33% 67% / 55% 27% 73% 45%',
        'morph-3': '33% 67% 58% 42% / 63% 68% 32% 37%',
      },
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'bg1': '#080a0f',
        'bg2': '#001120',
        'color1': 'rgb(18, 113, 255)',
        'color2': 'rgb(107, 74, 255)',
        'color3': 'rgb(100, 100, 255)',
        'color4': 'rgb(50, 160, 220)',
        'color5': 'rgb(80, 47, 122)',
        'color-interactive': 'rgb(140, 100, 255)',
      },
        backgroundImage: {
        'radial': 'radial-gradient(circle at center, rgba(var(--color-interactive), 0.8) 0, rgba(var(--color-interactive), 0) 50%)',
      },
      textShadow: {
        'text-a1':
          '0 1px 0 #20d7cc, 0 2px 0 #11d1a4, 0 3px 0 #20d7cc, 0 4px 0 #20d7cc, 0 5px 0 #20d7cc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px #2f363766',
        'light-shadow-primary':
          '0 1px 0 #fff, 0 2px 0 #efefef, 0 3px 0 #bfbfbf, 0 4px 0 #8f8f8f, 0 5px 0 #606060, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.6)',
        'dark-shadow-primary':
          '0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.6)',
        'a1-primary': 'var(--shadow-text-a1)',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      nunito: ['Nunito Sans', 'sans-serif'],
      matemasie: ['Matemasie', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ['dark', 'rounded'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar'),
    'prettier-plugin-tailwindcss',
    plugin(function ({ matchUtilities, addUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
      addUtilities({
        '.shadow-text-a1': {
          '@apply text-shadow-light-shadow-primary': '',
          '&.dark': {
            '@apply text-shadow-dark-shadow-primary': '',
          },
        },
      });
    }),
  ],
};
