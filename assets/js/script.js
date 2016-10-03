(function ($) {
  $(window).on('load', function(){
    $('body').addClass('loaded');
    setTimeout(function(){
      $('body').addClass('loaded--go');
      $('.arrow-container').addClass('loaded');
    }, 1000);
  });

$.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options === 'string') {
        defaults.selector = options;
      }

      options = $.extend(defaults, options);
      return $(options.selector).click(function (e) {
        var jumpobj = $(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = $(target).offset().top;

        $('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing', function(){
          // setTimeout(function(){clickToActivate = false;}, 100);
        });
        e.preventDefault();
      });
    }
  };

  $(document).ready(function() {
    $.mark.jump();
  });

})(jQuery);
