/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			colors: {
				main: "#0A0A0B",
				util: "#111212",
				fontMain: "#F0F0F0",
				accent: "#F5F3F3",
				contrast: "0A0A0B"
			},
			fontFamily: {
				main: ["Lato", "sans-serif"],
				accent: ["Lora", "serif"],
			},
		},
  },
  plugins: [],
}
