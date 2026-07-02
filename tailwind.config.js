/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000", // Pure pitch black
        surface: "#09090b", // Zinc-950
        surface2: "#18181b", // Zinc-900
        accent: "#c4b5fd", // Soft ethereal violet (Violet-300)
        accent2: "#bae6fd", // Soft ethereal blue (Sky-200)
        textPrimary: "#f8fafc", // Crisp off-white
        textSecondary: "#94a3b8", // Slate-400
        textMuted: "#475569", // Slate-600
        border: "rgba(255,255,255,0.06)", // Extremely subtle border
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        space: ['Space Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'aurora': 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(138, 139, 158, 0.05) 100%)',
      },
    },
  },
  plugins: [],
}
