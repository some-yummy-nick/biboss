'use strict';
(function () {
  jQuery(function ($) {
    $('.phone').each(function () {
      $(this).mask("8 999 999 99 99");
    })
    $('body').noisy({
      'intensity': 0,
      'size': 200,
      'opacity': 0.08,
      'fallback': '',
      'monochrome': false
    }).css('background-color', '#f0f5e5');
  });
})();