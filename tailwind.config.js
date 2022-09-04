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
				green: {
					50: "#7ffdad",
					100: "#75f3a3",
					200: "#6be999",
					300: "#61df8f",
					400: "#57d585",
					500: "#4dcb7b",
					600: "#43c171",
					700: "#39b767",
					800: "#2fad5d",
					900: "#25a353",
				},
				blue: {
					50: "#83adff",
					100: "#79a3ff",
					200: "#6f99ff",
					300: "#658fff",
					400: "#5b85fc",
					500: "#517bf2",
					600: "#4771e8",
					700: "#3d67de",
					800: "#335dd4",
					900: "#2953ca",
				},
				slate: {
					50: "#bed2e5",
					100: "#b4c8db",
					200: "#aabed1",
					300: "#a0b4c7",
					400: "#96aabd",
					500: "#8ca0b3",
					600: "#8296a9",
					700: "#788c9f",
					800: "#6e8295",
					900: "#64788b",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
