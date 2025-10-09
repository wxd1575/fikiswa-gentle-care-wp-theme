<?php
// templates/services.php for Fikiswa Gentle Care Theme
// Loop through Services CPT and display in grid
$args = array('post_type' => 'service', 'posts_per_page' => 6);
$services = new WP_Query($args);
?>
<section class="services-section grid gap-4 p-4">
    <h2 class="section-title text-center"><?php _e('Our Services', 'fikiswa-gentle-care'); ?></h2>
    <div class="services-list grid gap-4">
        <?php if ($services->have_posts()) : while ($services->have_posts()) : $services->the_post(); ?>
            <div class="service-card rounded shadow p-4">
                <?php if (has_post_thumbnail()) {
                    the_post_thumbnail('medium', array('class' => 'service-image rounded'));
                } ?>
                <h3 class="service-title"><?php the_title(); ?></h3>
                <div class="service-excerpt"><?php the_excerpt(); ?></div>
            </div>
        <?php endwhile; wp_reset_postdata(); else : ?>
            <p><?php _e('No services found.', 'fikiswa-gentle-care'); ?></p>
        <?php endif; ?>
    </div>
</section>
<!-- Inline comments:
- WP_Query for services CPT
- the_post_thumbnail() for images
Testing checklist:
- Services display in grid
- Images and excerpts show
- No PHP errors
-->
