/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "class",
  theme: {
    extend: {
			colors: {},
			fontFamily: {
				default: "'Anuphan', sans-serif"
			},
		},
  },
  plugins: [],
}
