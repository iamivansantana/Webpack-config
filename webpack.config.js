const HtmlWebpackPlugin = require('html-webpack-plugin'),
	MiniCssExtracPlugin = require('mini-css-extract-plugin');
const { loader } = require('mini-css-extract-plugin');

module.exports = {
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
				type: 'asset',
			},
			//Fuentes (letras)
			{
				test: /\.(woff|ttf)$/i,
				type: 'asset',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
		new MiniCssExtracPlugin(),
	],
};
