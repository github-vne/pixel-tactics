/* eslint-disable import/no-commonjs */

// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
const path = require('path');

const ROOT = (exports.ROOT = path.join(__dirname, '../..'));

const PARSER_OPTIONS = {
	sourceType: 'module',
	ecmaVersion: 2017,
	ecmaFeatures: {
		jsx: true,
	},
	project: './tsconfig.json',
	tsconfigRootDir: ROOT,
};

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parserOptions: PARSER_OPTIONS,
			rules: {
				'@typescript-eslint/no-shadow': 2,
				'@typescript-eslint/no-unused-vars': 2,
				'@typescript-eslint/no-use-before-define': 2,
				'@typescript-eslint/no-magic-numbers': [
					1,
					{
						ignore: [0, 1],
						ignoreEnums: true,
						ignoreNumericLiteralTypes: true,
						ignoreReadonlyClassProperties: true,
						ignoreArrayIndexes: true,
						enforceConst: true,
					},
				],
				'@typescript-eslint/no-redeclare': 2,
				'@typescript-eslint/naming-convention': [
					2,
					{
						selector: 'typeAlias',
						format: ['StrictPascalCase'],
						prefix: ['T'],
					},
					{
						selector: 'interface',
						format: ['StrictPascalCase'],
						prefix: ['I'],
					},
					{
						selector: 'enum',
						format: ['StrictPascalCase'],
						prefix: ['E'],
					},
				],
				// type linting
				'@typescript-eslint/no-explicit-any': 2,
				'@typescript-eslint/no-unsafe-call': 2,
				'@typescript-eslint/no-unsafe-assignment': 2,
				'@typescript-eslint/no-unsafe-member-access': 2,
				'@typescript-eslint/no-unsafe-return': 2,
				'@typescript-eslint/no-implicit-any-catch': 2,
				'@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
				'@typescript-eslint/no-unnecessary-condition': 2,
			},
		},
		{
			files: ['*.spec.ts', '*.spec.tsx', '*.stories.tsx', '**/__mocks__/**/*', '_eslint/*'],
			parserOptions: PARSER_OPTIONS,
			rules: {
				'@typescript-eslint/no-magic-numbers': 0,
			},
		},
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-explicit-any': 0,
				'@typescript-eslint/no-unsafe-call': 0,
				'@typescript-eslint/no-unsafe-assignment': 0,
				'@typescript-eslint/no-unsafe-member-access': 0,
				'@typescript-eslint/no-unsafe-return': 0,
				'@typescript-eslint/no-implicit-any-catch': 0,
			},
		},
	],
};
