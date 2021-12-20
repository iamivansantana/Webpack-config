const HtmlWebpackPlugin = require('html-webpack-plugin'),
	MiniCssExtracPlugin = require('mini-css-extract-plugin');
const { loader } = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		js: './src/index.js',
		react: './src/index_react.js',
		ts: './src/index_ts.js',
	},
	output: {
		filename: '[name].[chunkhash].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/i,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: true,
						},
					},
				],
			},
			//Styles
			{
				test: /\.css$/i,
				use: [MiniCssExtracPlugin.loader, 'css-loader'],
			},
			//Imagenes
			{
				test: /\.(jpe?g|png|gif|svg|webp)$/i,
				use: ['file-loader?name=assets/[name].[ext]', 'image-webpack-loader'],
			},
			//Fuentes (letras)
			{
				test: /\.(woff|ttf)$/i,
				type: 'asset',
			},
		],
	},
	plugins: [
		// new HtmlWebpackPlugin({
		// 	template: './src/index.html',
		// 	filename: './index.html',
		// }),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
			chunks: ['js'],
			hash: true,
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './react.html',
			chunks: ['react'],
			hash: true,
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './ts.html',
			chunks: ['ts'],
			hash: true,
		}),
		new MiniCssExtracPlugin(),
	],
};
