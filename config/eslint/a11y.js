/* eslint-disable import/no-commonjs */

// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules
module.exports = {
	plugins: ['jsx-a11y'],
	extends: ['plugin:jsx-a11y/recommended'],
	rules: {
		'jsx-a11y/label-has-associated-control': 0,
		'jsx-a11y/no-autofocus': 0,
	},
};
