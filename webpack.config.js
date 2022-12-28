const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );

module.exports = {
    ...defaultConfig,
    ...{
		"entry": {
        	"blocks-hello-world": path.resolve( process.cwd(), 'blocks/hello-world', 'index.js' ),
		}
    }
}
