/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {backgroundImage: {
        'hero-pattern': `radial-gradient(at 79% 66%, #f1fdf3 0px, transparent 50%),
                         radial-gradient(at 27% 42%, #e5f4e7 0px, transparent 50%),
                         radial-gradient(at 54% 93%, #d1e9d2 0px, transparent 50%),
                         radial-gradient(at 71.06681034482759% 40.625%, #99cda9 0px, transparent 50%),
                         #f1fdf3`
      }},
  },
  plugins: [heroui()],
}

