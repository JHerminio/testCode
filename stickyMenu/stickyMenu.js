jQuery(document).ready(function($) {
    $('.sticky-element').hover(function() {
      $(this).addClass('hovered');
    }, function() {
      $(this).removeClass('hovered');
    });
  });
  