// animations.js - Scroll and hover effects for Fikiswa Gentle Care
jQuery(document).ready(function($){
  $('.service-card, .testimonial-card').on('mouseenter', function(){
    $(this).addClass('shadow');
  }).on('mouseleave', function(){
    $(this).removeClass('shadow');
  });
  // Add scroll reveal or other animation logic here
});
