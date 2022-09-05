module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ["@typescript-eslint"],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:@typescript-eslint/strict",
		"prettier",
	],
	ignorePatterns: [
		".DS_Store",
		"node_modules",
		".env",
		".env.*",
		"!.env.example",
		"*.html",
		"tailwind.config.js",
		"postcss.config.js",
		".eslintrc.js",
		"package-lock.json",
	],
	parser: "@typescript-eslint/parser",
	settings: {
		react: {
			version: "detect",
		},
	},
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["tsconfig.json"],
	},
	plugins: ["react"],
	rules: {
		/**
		 * If you are using eslint-plugin-react, the react/jsx-uses-react and react/react-in-jsx-scope
		 * rules are no longer necessary and can be turned off or removed.
		 *
		 * See: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
		 */
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
		"no-control-regex": "off",
		"@typescript-eslint/non-nullable-type-assertion-style": "off",
		"@typescript-eslint/no-dynamic-delete": "off",
	},
};
