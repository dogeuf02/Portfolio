/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5F7FA",
        primary: "#1E3A8A",
        secondary: "#2563EB",
        accent: "#F59E0B",
        text: "#111827",
        muted: "#6B7280",
      },
    }

  },
  plugins: [],
};
