<?php
define( 'CHILD_THEME_FOCE_CHILD_VERSION', '0.1' );

add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );
function enqueue_parent_styles() {
   
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
//Chargement style child theme
function child_enqueue_styles() {
  
    wp_enqueue_style( 'foce-child-theme-css', get_stylesheet_directory_uri() . '/css/style.css', array('parent-style'), CHILD_THEME_FOCE_CHILD_VERSION, 'all' );
}
add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );

//Chargement du js
function enqueue_custom_script() {
    // Charge le script JavaScript
    wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/js/script.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_custom_script');


// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}
