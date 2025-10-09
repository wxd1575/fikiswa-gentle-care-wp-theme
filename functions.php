<?php
// functions.php for Fikiswa Gentle Care Theme
// Enqueue theme styles and scripts, register menus, widget areas, theme supports, and include custom functions

// Enqueue styles and scripts
function fikiswa_enqueue_assets() {
    // Main stylesheet
    wp_enqueue_style('fikiswa-main', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0');
    wp_enqueue_style('fikiswa-components', get_template_directory_uri() . '/assets/css/components.css', array('fikiswa-main'), '1.0.0');
    wp_enqueue_style('fikiswa-responsive', get_template_directory_uri() . '/assets/css/responsive.css', array('fikiswa-main'), '1.0.0');
    // Theme stylesheet
    wp_enqueue_style('fikiswa-style', get_stylesheet_uri(), array(), '1.0.0');

    // JS files
    wp_enqueue_script('fikiswa-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    wp_enqueue_script('fikiswa-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array('jquery'), '1.0.0', true);
    wp_enqueue_script('fikiswa-animations', get_template_directory_uri() . '/assets/js/animations.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'fikiswa_enqueue_assets');

// Register navigation menus
function fikiswa_register_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'fikiswa-gentle-care'),
        'footer' => __('Footer Menu', 'fikiswa-gentle-care'),
    ));
}
add_action('after_setup_theme', 'fikiswa_register_menus');

// Theme supports
function fikiswa_theme_supports() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'fikiswa_theme_supports');

// Register widget areas
function fikiswa_widgets_init() {
    register_sidebar(array(
        'name' => __('Sidebar', 'fikiswa-gentle-care'),
        'id' => 'sidebar-1',
        'description' => __('Main sidebar area', 'fikiswa-gentle-care'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));
    register_sidebar(array(
        'name' => __('Footer Widgets', 'fikiswa-gentle-care'),
        'id' => 'footer-widgets',
        'description' => __('Footer widget area', 'fikiswa-gentle-care'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));
}
add_action('widgets_init', 'fikiswa_widgets_init');

// Include custom functions
require_once get_template_directory() . '/inc/custom-functions.php';

/*
Testing checklist:
- All CSS/JS files are enqueued
- Menus appear in admin
- Theme supports enabled
- Widget areas show in admin
- No PHP errors
*/
