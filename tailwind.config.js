/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "class",
  theme: {
    extend: {
			colors: {
				backgroundDark: "#1A1A1A",
				mainDark: "#F8F8F8",
				headingTextDark: "#F8F8F8",
				defaultTextDark: "#8C8C8C",
				utilPrimaryDark: "#1F1F1F",
				utilSecondaryDark: "#8C8C8C",

				background: "#F8F8F8",
				main: "#202020",
				headingText: "#202020",
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
