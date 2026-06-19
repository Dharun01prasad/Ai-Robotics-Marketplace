/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:      "rgb(0, 85, 128)",
          "blue-dark": "rgb(0, 64, 97)",
          orange:    "rgb(245, 154, 25)",
          "orange-dark": "rgb(214, 132, 12)",
          pink:      "#F672A3",
          "pink-dark": "#E0508C",
          dark:      "#1F2937",
          muted:     "#6B7280",
          surface:   "#F8FAFC",
          border:    "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        'card-hover': "0 4px 12px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
