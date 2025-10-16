<?php
// templates/hero.php for Fikiswa Gentle Care Theme
// Displays hero section with dynamic headline, subtitle, and background image
$headline = get_theme_mod('hero_headline', __('Welcome to Fikiswa Gentle Care', 'fikiswa-gentle-care'));
$subtitle = get_theme_mod('hero_subtitle', __('Gentle, holistic care for every birth journey.', 'fikiswa-gentle-care'));
$bg_image = get_theme_mod('hero_bg_image');
?>
<section class="hero-section text-center p-4" style="background-image: url('<?php echo esc_url($bg_image ? wp_get_attachment_url($bg_image) : get_template_directory_uri() . '/assets/images/hero-image.jpg'); ?>');">
    <div class="hero-content">
        <h1 class="hero-headline" tabindex="0"><?php echo esc_html($headline); ?></h1>
        <p class="hero-subtitle" tabindex="0"><?php echo esc_html($subtitle); ?></p>
        <img src="<?php echo esc_url($bg_image ? wp_get_attachment_url($bg_image) : get_template_directory_uri() . '/assets/images/hero-image.jpg'); ?>" alt="Hero background" loading="lazy" style="display:none;" aria-hidden="true" />
    </div>
</section>
<!-- Inline comments:
- get_theme_mod() for Customizer fields
- wp_get_attachment_url() for dynamic image
Testing checklist:
- Headline/subtitle editable in Customizer
- Background image is dynamic
- No PHP errors
-->
