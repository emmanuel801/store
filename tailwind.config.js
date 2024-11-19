/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      exports: {
        theme: {
          extend: {
            keyframes: {
              slideIn: {
                '0%': { transform: 'translateY(-100%)' },
                '100%': { transform: 'translateY(0)' },
              },
            },
            animation: {
              slideIn: 'slideIn 0.3s ease-out',
            },
          },
        },
      },
    },
  },
  plugins: [],
}

