var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode:'development',
	entry:'./main.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'bundle.js'
	},
	module:{
		rules:[{
			test:/\.css$/,
			use:[{
				loader:'style-loader'
			},{
				loader:'css-loader'
			}]
		}]	
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename:'index.html',
			inject:'body'
		})
	],
	devServer:{
		static:{
			directory:path.join(__dirname,'images')
		},
		compress:true,
		port:9000,
		hot:true,
		https:false,
		open:true
	}
}
