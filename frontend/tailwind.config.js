/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:    "#2563EB",
          indigo:  "#4F46E5",
          sky:     "#38BDF8",
          yellow:  "#FBBF24",
          orange:  "#F97316",
          green:   "#22C55E",
          dark:    "#0F172A",
          muted:   "#64748B",
          surface: "#F1F5F9",
        },
      },
      fontFamily: {
        display: ['"Nunito"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
