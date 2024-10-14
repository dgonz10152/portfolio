/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["roboto", "sans-serif"],
				"roboto-bold": ["roboto-bold"],
				"noto-serif": ["noto-serif", "serif"],
			},
		},
	},
	plugins: [],
};
