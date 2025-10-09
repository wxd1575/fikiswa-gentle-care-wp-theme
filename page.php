<?php
// page.php for Fikiswa Gentle Care Theme
get_header(); ?>
<main class="container p-4">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article id="page-<?php the_ID(); ?>" <?php post_class('rounded shadow p-4'); ?>>
            <?php get_template_part('templates/hero'); ?>
            <h1 class="page-title text-center"><?php the_title(); ?></h1>
            <div class="page-content">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>
<!-- Inline comments:
- get_template_part('templates/hero') loads hero section
- the_content() is editable in WP editor
Testing checklist:
- Page content displays
- Hero section loads
- No PHP errors
-->
