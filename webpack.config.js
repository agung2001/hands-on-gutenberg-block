const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );

module.exports = {
	...defaultConfig,
	...{
		"entry": {
			"blocks-hello-world": "./assets/blocks/hello-world/index.js",
		},
		"output": {
			path: path.resolve(__dirname, 'assets/build/blocks'),
			filename: '[name].js'
		}
	}
}
