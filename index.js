module.exports = {
	extends: ["airbnb", "plugin:prettier/recommended"],
	rules: {
		// Too restrictive. Better readability going from simple to more complex code as scrolling.
		"no-use-before-define": "off",
	},
}
