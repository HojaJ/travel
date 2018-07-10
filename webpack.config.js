module.exports = {
	mode: 'production',
	entry: "./app/assets/scripts/App.js",
	
	output: {
		path: __dirname + "/app/temp/scripts",
		filename: "App.js"
	},

	module: {
		rules: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}
