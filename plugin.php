<?php
/**
 * Plugin Name: CPT Custom Field Saving Example
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: A simple guide for how to save custom fields against a custom post type.
 * Author: Subrata Sarkar
 * Author URI: https://profiles.wordpress.org/subrataemfluence
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package book-list
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
