/* eslint-disable */
const path = require('path')

module.exports = (env, argv) => {
	const production = argv.mode === 'production'
	return {
		entry: {
			'audio': path.resolve(
				__dirname,
				'src/components/audio.tsx',
			),
			'ball-triangle': path.resolve(
				__dirname,
				'src/components/ball-triangle.tsx',
			),
			'bars': path.resolve(
				__dirname,
				'src/components/bars.tsx',
			),
			'circles': path.resolve(
				__dirname,
				'src/components/circles.tsx',
			),
			'grid': path.resolve(
				__dirname,
				'src/components/grid.tsx',
			),
			'hearts': path.resolve(
				__dirname,
				'src/components/hearts.tsx',
			),
			'oval': path.resolve(
				__dirname,
				'src/components/oval.tsx',
			),
			'puff': path.resolve(
				__dirname,
				'src/components/puff.tsx',
			),
			'rings': path.resolve(
				__dirname,
				'src/components/rings.tsx',
			),
			'spinning-circles': path.resolve(
				__dirname,
				'src/components/spinning-circles.tsx',
			),
			'tail-spin': path.resolve(
				__dirname,
				'src/components/tail-spin.tsx',
			),
			'three-dots': path.resolve(
				__dirname,
				'src/components/three-dots.tsx',
			),
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					use: 'babel-loader',
				},
				{
					test: /\.tsx?$/,
					use: [
						{
							loader: 'babel-loader',
						},
						{
							loader: 'ts-loader',
							options: { allowTsInNodeModules: true },
						},
					],
				},
			],
		},
		devtool: production ? false : 'source-map',
		mode: production ? 'production' : 'development',
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			},
		},
	}
}
