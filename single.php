<?php
// single.php for Fikiswa Gentle Care Theme
get_header(); ?>
<main class="container p-4">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('rounded shadow p-4'); ?>>
            <h1 class="post-title"><?php the_title(); ?></h1>
            <div class="post-meta">
                <span><?php the_time(get_option('date_format')); ?></span> |
                <span><?php the_author(); ?></span> |
                <span><?php the_category(', '); ?></span>
            </div>
            <div class="post-content">
                <?php the_content(); ?>
            </div>
            <div class="post-navigation flex gap-4">
                <div class="prev-post"><?php previous_post_link('%link', __('&laquo; Previous', 'fikiswa-gentle-care')); ?></div>
                <div class="next-post"><?php next_post_link('%link', __('Next &raquo;', 'fikiswa-gentle-care')); ?></div>
            </div>
            <?php comments_template(); ?>
        </article>
    <?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>
<!-- Inline comments:
- previous_post_link(), next_post_link() for navigation
- comments_template() loads comments
Testing checklist:
- Post content displays
- Navigation works
- Comments load
- No PHP errors
-->
