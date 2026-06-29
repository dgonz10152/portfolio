/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
				roboto: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
				"roboto-bold": ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
				"noto-serif": ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
			},
		},
	},
	plugins: [],
};
