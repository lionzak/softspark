/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003F8E",
        secondary: "#1DBF73",
        accent: "#FF9F40",
        backgroundLight: "#F7FAFC",
        backgroundDark: "#0F172A",
        textPrimary: "#1E293B",
        textMuted: "#64748B",
        border: "#CBD5E1",
        success: "#22C55E",
        warning: "#FACC15",
        error: "#EF4444",
        info: "#3B82F6",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};
