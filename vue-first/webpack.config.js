var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// 输入文件
	entry: {
		'main': path.resolve(__dirname, './src/main.js')

	},
	// 输出文件
	output: {
		path: path.resolve(__dirname, './build'),
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
				test: /\.html$/,
				loader: 'html-loader'
			},
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
				loader: 'file-loader',
				// loader: 'file-loader',
				query: {
					limit: 20000,
					name: 'img/[name].[ext]'
				}
			},
			{
				test:/\.(css|less)$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, './index.html'),
			inject: 'body',
			chunks: ['main']
		})
	],
	devServer: {
	  contentBase: path.join(__dirname, "build"),
	  hot: true,
	  port: 9000
	}
	
}