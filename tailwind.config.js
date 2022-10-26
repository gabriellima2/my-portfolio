/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "class",
  theme: {
    extend: {
			colors: {
				mainDark: "#0A0A0B",
				utilDark: "#D0D0D0",
				fontDark: "#F0F0F0",
				contrastDark: "#0A0A0A",
				accentDark: "#F0F0F0",

				main: "#F0F0F0",
				util: "#111212",
				font: "#0A0A0B",
				contrast: "#F5F3F3",
				accent: "#0A0A0B",
			},
			fontFamily: {
				main: ["Lato", "sans-serif"],
				accent: ["Lora", "serif"],
			},
		},
  },
  plugins: [],
}
