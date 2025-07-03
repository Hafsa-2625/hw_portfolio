module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        funkyPink: '#FFD1E3',
        funkyPurple: '#845EC2',
        funkyYellow: '#FFDE7D',
        funkyTeal: '#2EC4B6',
        funkyOrange: '#FF9671',
        funkyBlue: '#3B82F6',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        funky: ["'Fredoka'", 'Quicksand', 'cursive', 'sans-serif'],
      },
      backgroundImage: {
        'funky-gradient': 'linear-gradient(135deg, #FFD1E3 0%, #845EC2 40%, #2EC4B6 100%)',
        'funky-card': 'linear-gradient(135deg, #FFDE7D 0%, #FFD1E3 100%)',
        'funky-alt': 'linear-gradient(135deg, #FF9671 0%, #845EC2 100%)',
        'funky-pink': 'linear-gradient(135deg, #FFD1E3 0%, #FFF0F6 100%)',
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
        "spin-slow": "spin 8s linear infinite",
        'wiggle': 'wiggle 1.5s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}
