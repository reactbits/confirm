const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	devtool: 'source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./demo/index',
	],
	output: {
		path: path.join(__dirname, 'demo'),
		filename: 'bundle.js',
		publicPath: '/build/',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(NODE_ENV),
			},
		}),
	],
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json',
			},
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /(node_modules|vendor)/,
			},
		],
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json', '.css', '.scss'],
		modulesDirectories: ['node_modules', 'demo', 'src'],
	},
};
