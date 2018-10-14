const webpack = require('webpack')
const path = require('path')

module.exports = (env, options) => ({
	mode: 'development',
	entry: {
		app: './src/content.js',
	},
	module: {
		rules: [
			{
				test: /\js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					}
				}
			}
		]
	},
	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'build'),
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			maxSize: 0,
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				}
			}
		}
	},

})
