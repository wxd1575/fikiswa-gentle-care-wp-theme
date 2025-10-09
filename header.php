<?php
// header.php for Fikiswa Gentle Care Theme
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="site-header">
    <div class="container flex items-center justify-between p-4">
        <?php if (has_custom_logo()) {
            the_custom_logo();
        } else { ?>
            <a href="<?php echo esc_url(home_url('/')); ?>" class="site-title"><?php bloginfo('name'); ?></a>
        <?php } ?>
        <nav class="main-nav" aria-label="Main Navigation">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => 'nav-list flex gap-4',
                'fallback_cb' => false,
            ));
            ?>
        </nav>
    </div>
</header>
<!-- Inline comments:
- wp_head() loads scripts/styles/meta
- body_class() adds dynamic classes
- wp_nav_menu() outputs menu
- the_custom_logo() displays logo
Testing checklist:
- Logo displays
- Menu is dynamic
- Responsive header
- No PHP errors
-->
