const path = require('path');

module.exports = [{
	mode: 'production',
	target: 'web',
	entry: './src/baluster.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'baluster.min.js',
		library: 'baluster',
		libraryTarget: 'umd',
		umdNamedDefine: true,
		globalObject: 'typeof self !== \'undefined\' ? self : this',
	},
}, {
	mode: 'development',
	target: 'web',
	entry: './src/baluster.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'baluster.js',
		library: 'baluster',
		libraryTarget: 'umd',
		umdNamedDefine: true,
		globalObject: 'typeof self !== \'undefined\' ? self : this',
	},
}]