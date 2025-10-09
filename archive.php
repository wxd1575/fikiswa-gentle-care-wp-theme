<?php
// archive.php for Fikiswa Gentle Care Theme
get_header(); ?>
<main class="container p-4">
    <header class="archive-header text-center">
        <h1><?php the_archive_title(); ?></h1>
        <div><?php the_archive_description(); ?></div>
    </header>
    <?php if (have_posts()) : ?>
        <div class="archive-list grid gap-4">
            <?php while (have_posts()) : the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class('rounded shadow p-4'); ?>>
                    <h2 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <div class="post-meta">
                        <span><?php the_time(get_option('date_format')); ?></span> |
                        <span><?php the_author(); ?></span>
                    </div>
                    <div class="post-excerpt">
                        <?php the_excerpt(); ?>
                    </div>
                </article>
            <?php endwhile; ?>
        </div>
        <div class="pagination">
            <?php the_posts_pagination(); ?>
        </div>
    <?php else : ?>
        <p><?php _e('No posts found.', 'fikiswa-gentle-care'); ?></p>
    <?php endif; ?>
</main>
<?php get_footer(); ?>
<!-- Inline comments:
- the_archive_title(), the_archive_description() for context
- WordPress Loop for posts
Testing checklist:
- Archive title/description display
- Posts list loads
- Pagination works
- No PHP errors
-->
