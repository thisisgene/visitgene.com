(function ($) {
  $(window).on('load', function(){
    $('body').addClass('loaded');
    setTimeout(function(){
      $('body').addClass('loaded--go');
    }, 1000);
  });

})(jQuery);
