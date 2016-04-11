var path = require("path");

module.exports = {
	entry: "./app/App.js",
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js',
        publicPath: '/public/'
	},
	module: {
		loaders: [
			{
				test:/\.js$/,
				exclude:/(node_modules)/,
				loader: 'babel'
			}
		]
	}
}