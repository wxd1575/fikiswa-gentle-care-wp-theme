<?php
// templates/testimonials.php for Fikiswa Gentle Care Theme
// Loop through Testimonials CPT and display with featured image and star rating
$args = array('post_type' => 'testimonial', 'posts_per_page' => 6);
$testimonials = new WP_Query($args);
?>
<section class="testimonials-section grid gap-4 p-4">
    <h2 class="section-title text-center"><?php _e('Testimonials', 'fikiswa-gentle-care'); ?></h2>
    <div class="testimonials-list grid gap-4">
        <?php if ($testimonials->have_posts()) : while ($testimonials->have_posts()) : $testimonials->the_post(); ?>
            <div class="testimonial-card rounded shadow p-4">
                <?php if (has_post_thumbnail()) {
                    the_post_thumbnail('thumbnail', array('class' => 'testimonial-image rounded'));
                } ?>
                <div class="testimonial-content">
                    <h3 class="testimonial-title"><?php the_title(); ?></h3>
                    <div class="testimonial-excerpt"><?php the_excerpt(); ?></div>
                    <div class="testimonial-meta">
                        <span class="testimonial-client"><?php echo esc_html(get_post_meta(get_the_ID(), 'client_name', true)); ?></span>
                        <span class="testimonial-rating"><?php echo str_repeat('★', intval(get_post_meta(get_the_ID(), 'star_rating', true))); ?></span>
                    </div>
                </div>
            </div>
        <?php endwhile; wp_reset_postdata(); else : ?>
            <p><?php _e('No testimonials found.', 'fikiswa-gentle-care'); ?></p>
        <?php endif; ?>
    </div>
</section>
<!-- Inline comments:
- WP_Query for testimonials CPT
- get_post_meta() for client name and rating
Testing checklist:
- Testimonials display
- Star ratings show
- No PHP errors
-->
