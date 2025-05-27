import { type Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'hello-blue': '#0000FF',
        'welcome-green': '#008000',
      },
    },
  },
  plugins: [],
} satisfies Config;