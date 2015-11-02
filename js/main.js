$(function() {
  $('a').click(function() {
    var scrollVal = $(this).attr('href');
    var scrollTo = $(scrollVal);
    console.log(scrollTo.position());
    $("html, body").animate({
      scrollTop: scrollTo.position().top - 40
    }, 1000);
    return false;
  });
});
