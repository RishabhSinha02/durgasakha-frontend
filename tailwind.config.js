import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#D8423F",
        secondary: "#7D4555",
        cyan: {
          50: "#f7f6ff",
          100: "#eeecfe",
          200: "#d5d1fd",
          300: "#D8423F",
          400: "#897df8",
          500: "#5645f5",
          600: "#4d3edd",
          700: "#7D4555",
          800: "#7D4555",
          900: "#2a2278",
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
