/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "class",
  theme: {
    extend: {
			backgroundImage: {
				"gradient-dark": "url('../../../public/assets/bg-dark.png')",
				gradient: "url('../../../public/assets/bg.png')"
			},
			colors: {
				"main-dark": "#1A1A1A",
				"brand-dark": "#F8F8F8",
				"heading-dark": "#F8F8F8",
				"text-dark": "#8C8C8C",
				"util-primary-dark": "#1F1F1F",
				"util-secondary-dark": "#2f2f2f",

				main: "#F8F8F8",
				brand: "#202020",
				heading: "#202020",
				text: "#5A5A5A",
				"util-primary": "#EFEFEF",
				"util-secondary": "#DDDDDD",
			},
			fontFamily: {
				default: "'Anuphan', sans-serif"
			},
			fontSize: {
				s: "0.875rem",
				normal: "1rem",
				medium: "1.25rem",
				l: "1.5rem",
				xl: "2rem",
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
				21: "84px",
			},
			borderRadius: {
				s: "8px",
				default: "16px",
			}
		},
  },
  plugins: [],
}
