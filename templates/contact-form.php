<?php
// templates/contact-form.php for Fikiswa Gentle Care Theme
// Integrate Contact Form 7 or WPForms via shortcode
?>
<section class="contact-form-section p-4">
    <h2 class="section-title text-center"><?php _e('Contact Us', 'fikiswa-gentle-care'); ?></h2>
    <div class="contact-form-wrapper">
        <?php echo do_shortcode('[contact-form-7 id="123" title="Contact form 1"]'); ?>
    </div>
</section>
<!-- Inline comments:
- do_shortcode() for Contact Form 7/WPForms
Testing checklist:
- Form displays
- Styling matches theme
- No PHP errors
-->
