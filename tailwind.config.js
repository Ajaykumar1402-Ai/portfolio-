/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#04040a",       // Deep space black
        surface: "#0d0d1a",          // Slightly lifted dark
        surface2: "#12121f",         // Card surface
        surface3: "#1a1a2e",         // Elevated card
        accent: "#a78bfa",           // Violet-400 – core accent
        accent2: "#38bdf8",          // Sky-400 – secondary accent
        accent3: "#f472b6",          // Pink-400 – tertiary accent
        accentGlow: "#7c3aed",       // Violet-600 – glow base
        textPrimary: "#f1f0ff",      // Near white with violet tint
        textSecondary: "#94a3b8",    // Slate-400
        textMuted: "#475569",        // Slate-600
        border: "rgba(167,139,250,0.08)",     // Violet-tinted subtle border
        borderHover: "rgba(167,139,250,0.25)", // Hover border
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        space: ['Space Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'aurora': 'linear-gradient(135deg, rgba(167,139,250,0.05) 0%, rgba(56,189,248,0.05) 100%)',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,58,237,0.3), transparent)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'scan-line': 'scanLine 8s linear infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'rotate-reverse': 'rotateReverse 15s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'particle': 'particle 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        rotateSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        rotateReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        particle: {
          '0%': { transform: 'translateY(0) translateX(0) opacity(1)' },
          '100%': { transform: 'translateY(-100px) translateX(50px)', opacity: '0' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(124,58,237,0.3)',
        'glow-md': '0 0 30px rgba(124,58,237,0.4)',
        'glow-lg': '0 0 60px rgba(124,58,237,0.5)',
        'glow-accent2': '0 0 30px rgba(56,189,248,0.3)',
        'inner-glow': 'inset 0 0 30px rgba(124,58,237,0.1)',
        'card': '0 4px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(167,139,250,0.08)',
        'card-hover': '0 8px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(167,139,250,0.2), 0 0 40px rgba(124,58,237,0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [],
}
