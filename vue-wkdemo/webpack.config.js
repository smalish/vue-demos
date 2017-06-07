var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// 输入文件
	entry: path.resolve(__dirname, './src/main.js'),
	// 输出文件
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: './js/[name]-bundle.js'
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
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, './index.html'),
			inject: 'body'
		}),
	],
	devServer: {
	  contentBase: path.join(__dirname, "dist"),
	  hot: true,
	  port: 9000
	}
	
}