<?php
/**
 * Plugin Name: Hands on Gutenberg Block (HOGB)
 * Description: Just another simple WordPress block
 * Version: 1.0
 * Author: Agung Sundoro
 * Author URI: https://agung2001.github.io
 * Text Domain: hands-on-gutenberg-block
 */

if (!defined('ABSPATH')) exit;

/** Global Accessible Paths */
define( 'HOGB_BLOCKS_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'HOGB_BLOCKS_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );

/** Register block and styles */
add_action( 'init', 'register_block' );
function register_block() {
	/** Register Script */
	wp_register_script(
		'block-hello-world-js',
		HOGB_BLOCKS_URL . '/assets/build/blocks/hello-world.js',
		array( 'wp-blocks'),
	);

	/** Register Block */
	register_block_type(
		'hands-on-gutenberg-block/hello-world',
		array(
			'editor_script' => 'block-hello-world-js',
		)
	);
}

