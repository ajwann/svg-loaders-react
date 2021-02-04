module.exports = {
	collectCoverageFrom: ['src/**/*.(js|jsx|ts|tsx)'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	globals: {
		'ts-jest': {
			babelConfig: true,
		},
	},
	cacheDirectory: '.jest/cache',
	setupFiles: ['./test/setupTests.ts'],
	testRegex: '(/test/*|(\\.|/)(test|spec))\\.tsx?$',
}
