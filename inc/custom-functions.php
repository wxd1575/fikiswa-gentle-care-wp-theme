<?php
// inc/custom-functions.php for Fikiswa Gentle Care Theme

// Register custom post type: Services
function fikiswa_services_cpt() {
    $labels = array(
        'name' => __('Services', 'fikiswa-gentle-care'),
        'singular_name' => __('Service', 'fikiswa-gentle-care'),
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-heart',
    );
    register_post_type('service', $args);
}
add_action('init', 'fikiswa_services_cpt');

// Register custom post type: Testimonials
function fikiswa_testimonials_cpt() {
    $labels = array(
        'name' => __('Testimonials', 'fikiswa-gentle-care'),
        'singular_name' => __('Testimonial', 'fikiswa-gentle-care'),
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-format-quote',
    );
    register_post_type('testimonial', $args);
}
add_action('init', 'fikiswa_testimonials_cpt');

// Register custom taxonomy for Services (Service Categories)
function fikiswa_service_taxonomy() {
    $labels = array(
        'name' => __('Service Categories', 'fikiswa-gentle-care'),
        'singular_name' => __('Service Category', 'fikiswa-gentle-care'),
    );
    register_taxonomy('service_category', 'service', array(
        'labels' => $labels,
        'hierarchical' => true,
        'public' => true,
    ));
}
add_action('init', 'fikiswa_service_taxonomy');

// Shortcode for hero section
function fikiswa_hero_shortcode($atts) {
    ob_start();
    get_template_part('templates/hero');
    return ob_get_clean();
}
add_shortcode('fikiswa_hero', 'fikiswa_hero_shortcode');

// Shortcode for services section
function fikiswa_services_shortcode($atts) {
    ob_start();
    get_template_part('templates/services');
    return ob_get_clean();
}
add_shortcode('fikiswa_services', 'fikiswa_services_shortcode');

// Shortcode for testimonials section
function fikiswa_testimonials_shortcode($atts) {
    ob_start();
    get_template_part('templates/testimonials');
    return ob_get_clean();
}
add_shortcode('fikiswa_testimonials', 'fikiswa_testimonials_shortcode');

// Shortcode for contact form section
function fikiswa_contact_form_shortcode($atts) {
    ob_start();
    get_template_part('templates/contact-form');
    return ob_get_clean();
}
add_shortcode('fikiswa_contact_form', 'fikiswa_contact_form_shortcode');

// Custom widget example: Recent Testimonials
class Fikiswa_Recent_Testimonials_Widget extends WP_Widget {
    function __construct() {
        parent::__construct(
            'fikiswa_recent_testimonials',
            __('Recent Testimonials', 'fikiswa-gentle-care'),
            array('description' => __('Displays recent testimonials.', 'fikiswa-gentle-care'))
        );
    }
    public function widget($args, $instance) {
        echo $args['before_widget'];
        echo $args['before_title'] . __('Recent Testimonials', 'fikiswa-gentle-care') . $args['after_title'];
        $query = new WP_Query(array('post_type' => 'testimonial', 'posts_per_page' => 3));
        if ($query->have_posts()) {
            echo '<ul class="recent-testimonials">';
            while ($query->have_posts()) {
                $query->the_post();
                echo '<li><a href="' . esc_url(get_permalink()) . '">' . esc_html(get_the_title()) . '</a></li>';
            }
            echo '</ul>';
            wp_reset_postdata();
        }
        echo $args['after_widget'];
    }
}
function fikiswa_register_widgets() {
    register_widget('Fikiswa_Recent_Testimonials_Widget');
}
add_action('widgets_init', 'fikiswa_register_widgets');

// Helper function: Get asset URI
function fikiswa_asset($path) {
    return get_template_directory_uri() . '/assets/' . ltrim($path, '/');
}

/*
Setup instructions:
- Custom post types for Services and Testimonials are now available in WP admin
- Use shortcodes [fikiswa_hero], [fikiswa_services], [fikiswa_testimonials], [fikiswa_contact_form] in pages/posts
Testing checklist:
- CPTs appear in admin
- Shortcodes render sections
- No PHP errors
*/
