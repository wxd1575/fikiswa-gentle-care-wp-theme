<?php
// sidebar.php for Fikiswa Gentle Care Theme
?>
<aside class="site-sidebar p-4">
    <?php if (is_active_sidebar('sidebar-1')) {
        dynamic_sidebar('sidebar-1');
    } else { ?>
        <div class="sidebar-fallback">
            <h2><?php _e('FAQ', 'fikiswa-gentle-care'); ?></h2>
            <ul>
                <li><a href="<?php echo esc_url(home_url('/faq')); ?>">Frequently Asked Questions</a></li>
                <li><a href="<?php echo esc_url(home_url('/contact')); ?>">Contact Us</a></li>
            </ul>
        </div>
    <?php } ?>
</aside>
<!-- Inline comments:
- dynamic_sidebar() loads widgets
Testing checklist:
- Sidebar widgets display
- No PHP errors
-->
