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
			fontSize: {
				s: "0.875rem",
				default: "1rem",
				normal: "1.125rem",
				medium: "1.25rem",
				l: "1.5rem",
				xl: "2",
				"2xl": "2.5rem",
				"4xl": "48px",
				"6xl": "96px"
			},
			spacing: {
				1: "4px",
				2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        13: "52px",
        14: "56px",
				15: "60px",
        16: "64px",
        17: "68px",
        18: "72px",
        19: "76px",
        20: "80px",
				20: "84px",
			}
		},
  },
  plugins: [],
}
