$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 798) {
      $('.arrow').fadeIn();
    } else {
      $('.arrow').fadeOut();
    }
  });

  $("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });
});  
