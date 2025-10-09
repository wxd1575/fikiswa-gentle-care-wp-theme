<?php
// footer.php for Fikiswa Gentle Care Theme
?>
<footer class="site-footer">
    <div class="container grid gap-4 p-4">
        <div class="footer-widgets">
            <?php if (is_active_sidebar('footer-widgets')) {
                dynamic_sidebar('footer-widgets');
            } ?>
        </div>
        <nav class="footer-nav" aria-label="Footer Navigation">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'footer',
                'container' => false,
                'menu_class' => 'nav-list flex gap-4',
                'fallback_cb' => false,
            ));
            ?>
        </nav>
        <div class="footer-social">
            <!-- Social icons (SVG recommended) -->
            <a href="#" aria-label="Facebook"><svg width="24" height="24" fill="currentColor"><!-- SVG icon --></svg></a>
            <a href="#" aria-label="Instagram"><svg width="24" height="24" fill="currentColor"><!-- SVG icon --></svg></a>
            <a href="#" aria-label="Twitter"><svg width="24" height="24" fill="currentColor"><!-- SVG icon --></svg></a>
        </div>
        <div class="footer-copyright text-center">
            &copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.
        </div>
    </div>
    <?php wp_footer(); ?>
</footer>
<!-- Inline comments:
- dynamic_sidebar() loads widgets
- wp_nav_menu() outputs footer menu
- wp_footer() loads scripts
Testing checklist:
- Footer widgets display
- Social icons visible
- Footer menu is dynamic
- No PHP errors
-->
