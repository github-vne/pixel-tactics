/* eslint-disable import/no-commonjs */

// https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
module.exports = {
	plugins: ['react'],
	rules: {
		'react/jsx-key': 2,
		'react/jsx-no-comment-textnodes': 2,
		'react/jsx-no-duplicate-props': 2,
		'react/jsx-no-target-blank': 0,
		'react/jsx-no-undef': 2, // TS?
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars': 2,
		'react/no-children-prop': 2,
		'react/no-danger': 2,
		'react/no-danger-with-children': 2,
		'react/no-deprecated': 2,
		'react/no-direct-mutation-state': 2,
		'react/no-find-dom-node': 2,
		'react/no-is-mounted': 2,
		'react/no-render-return-value': 2,
		'react/no-string-refs': 2,
		'react/no-unescaped-entities': 0,
		'react/no-unknown-property': 2,
		'react/no-unsafe': 0,
		'react/react-in-jsx-scope': 2,
		'react/require-render-return': 2,
		'react/jsx-curly-brace-presence': [2, {props: 'never', children: 'never'}],
	},
};
