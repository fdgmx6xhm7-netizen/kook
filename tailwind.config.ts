module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FF9F', // Neon Green
        secondary: '#FF00FF', // Neon Pink
        accent: '#00FFFF', // Neon Cyan
        background: '#0A0A0A', // Dark background
        text: '#E0E0E0', // Light text for dark mode
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // 가독성 좋은 기본 sans-serif 폰트
      },
      boxShadow: {
        neon: '0 0 10px #00FF9F, 0 0 20px #00FF9F',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
