/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Helvetica", "Arial", "sans-serif"],
				roboto: ["Helvetica", "Arial", "sans-serif"],
				"roboto-bold": ["Helvetica", "Arial", "sans-serif"],
				"noto-serif": ["Helvetica", "Arial", "sans-serif"],
			},
		},
	},
	plugins: [],
};
