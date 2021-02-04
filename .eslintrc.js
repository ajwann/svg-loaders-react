module.exports = {
	extends: ['@sprylab/eslint-config/react'],

	parserOptions: {
		project: './tsconfig.json',
	},

	globals: {
		__DEV__: true,
	},

	env: {
		node: true,
		browser: true,
		amd: true,
		es6: true,
		jest: true,
	},

	rules: {
		'jest/expect-expect': 'off',
	},
}
