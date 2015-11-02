$(function() {
  $(".button").on("click", function(e) {
    e.preventDefault();
    var scrollVal = $(this).attr('href');
    var scrollTo = $(scrollVal);
    console.log(scrollTo.position());
    $("html, body").animate({
      scrollTop: scrollTo.position().top - 40
    }, 1000);
    return false;
  });

});
