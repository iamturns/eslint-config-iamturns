module.exports = {
	extends: ["airbnb", "plugin:prettier/recommended"],
	rules: {
		// Too restrictive. Better readability going from simple to more complex code as scrolling.
		"no-use-before-define": "off",
		// No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
		"react/jsx-filename-extension": "off",
		// Allow Prettier to format code
		"react/jsx-one-expression-per-line": "off",
	},
}
