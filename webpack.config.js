const path = require('path');

module.exports = {
	entry: './src/baluster.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'baluster.js',
		library: 'baluster',
		libraryTarget: 'umd',
	}
};