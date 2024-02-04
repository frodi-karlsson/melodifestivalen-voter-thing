module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	plugins: [
		'pug',
	],
	extends: 'xo',
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'no-unused-vars': 'off',
		'no-alert': 'off',
	},
};
