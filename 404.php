<?php
// 404.php for Fikiswa Gentle Care Theme
get_header(); ?>
<main class="container p-4 text-center">
    <h1 class="error-title">404</h1>
    <p class="error-message">Sorry, the page you are looking for cannot be found.</p>
    <?php get_search_form(); ?>
    <div class="error-links">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="btn">Go to Home</a>
        <a href="<?php echo esc_url(home_url('/blog')); ?>" class="btn">View Blog</a>
        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn">Contact Us</a>
    </div>
</main>
<?php get_footer(); ?>
<!-- Inline comments:
- get_search_form() loads search
- Helpful links for navigation
Testing checklist:
- Custom 404 design
- Search form works
- Navigation links work
- No PHP errors
-->
