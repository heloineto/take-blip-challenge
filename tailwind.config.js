const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				sky: {
					50: "#5ef5ff",
					100: "#54ebfd",
					200: "#4ae1f3",
					300: "#40d7e9",
					400: "#36cddf",
					500: "#2cc3d5",
					600: "#22b9cb",
					700: "#18afc1",
					800: "#0ea5b7",
					900: "#049bad",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
