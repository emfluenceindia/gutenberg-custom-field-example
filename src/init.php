<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function simple_metabox_cgb_block_assets() {
	// Styles.
	wp_enqueue_style(
		'simple_metabox-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function simple_metabox_cgb_block_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'simple_metabox_cgb_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function simple_metabox_cgb_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'simple_metabox-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-editor', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'simple_metabox-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function simple_metabox_cgb_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'simple_metabox_cgb_editor_assets' );

/**
 * Register meta data
 */

function sar_book_meta() {
	register_meta( 'post', 'book_synopsis', array(
		'show_in_rest' => true,
		'type'         => 'string',
		'single'       => true,
	) );
	register_meta( 'post', 'book_author', array(
		'show_in_rest' => true,
		'type'         => 'string',
		'single'       => true,
	) );

	register_meta( 'post', 'book_publisher', array(
		'show_in_rest' => true,
		'type'         => 'string',
		'single'       => true,
	) );

	register_meta( 'post', 'book_language', array(
		'show_in_rest' => true,
		'type'         => 'string',
		'single'       => true,
	) );

	register_meta( 'post', 'book_year', array(
		'show_in_rest' => true,
		'type'         => 'string',
		'single'       => true,
	) );

	register_meta( 'post', 'book_price', array(
		'show_in_rest' => true,
		'type'         => 'string',
		'single'       => true,
	) );

	register_meta( 'post', 'book_discount', array(
		'show_in_rest' => true,
		'type'         => 'string',
		'single'       => true,
	) );

	register_meta( 'post', 'book_pages', array(
		'show_in_rest' => true,
		'type'         => 'string',
		'single'       => true,
	) );
}

add_action( 'init', 'sar_book_meta' );


/**
 * Register book CPT
 */
function sar_register_book_cpt() {

	$labels = array(
		'name'          => __( 'Books' ),
		'singular_name' => __( 'Book' ),
	);

	$args = array(
		'label'              => __( 'Books' ),
		'labels'             => $labels,
		'show_in_rest'       => true,
		'template' => array(
			array( 'book-list/book-metadata-block', array(
				'align' => 'left',
			) ),
		),
		'has_archive'        => true,
		'public'             => true,
		'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
		'rewrite'            => array( 'slug' => 'books' ),
		'show_ui'            => true,
		'show_in_menu'       => true,
		'menu_position'      => 6,
		'menu_icon'          => 'dashicons-book',
		'compatibility_type' => 'post',
	);

	register_post_type( 'book_list', $args );
}

add_action( 'init', 'sar_register_book_cpt' );


/**
 * Blocktype whitelisting
 */
