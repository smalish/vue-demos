var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// 输入文件
	entry: {
		'main': path.resolve(__dirname, './src/main.js'),
		'cart': path.resolve(__dirname, './src/cart.js')

	},
	// 输出文件
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: './js/[name]-bundle.js',
		// publicPath: '/static/'
	},
	resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'Vue': 'vue/dist/vue.js'
        }
    },
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=9819&name=img/[name].[ext]'
				// loader: 'file-loader'
			},
			{
				test:/\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, './index.html'),
			inject: 'body',
			chunks: ['main']
		}),
		new htmlWebpackPlugin({
			filename: 'cart.html',
			template: path.resolve(__dirname, './cart.html'),
			inject: 'body',
			chunks: ['cart']
		})
	],
	devServer: {
	  contentBase: path.join(__dirname, "dist"),
	  hot: true,
	  port: 9000
	}
	
}