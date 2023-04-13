/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "class",
  theme: {
    extend: {
			colors: {
				mainDark: "#1A1A1A",
				brandDark: "#F8F8F8",
				headingDark: "#F8F8F8",
				defaultTextDark: "#8C8C8C",
				utilPrimaryDark: "#1F1F1F",
				utilSecondaryDark: "#8C8C8C",

				main: "#F8F8F8",
				brand: "#202020",
				heading: "#202020",
				defaultText: "#5A5A5A",
				utilPrimary: "#EFEFEF",
				utilSecondary: "#DDDDDD",
			},
			fontFamily: {
				default: "'Anuphan', sans-serif"
			},
		},
  },
  plugins: [],
}
