$(function() {
    $(".button").on("click", function( e ) {
        e.preventDefault();
          console.log($($(this).attr('href')).offset().top);
        
          var px = ($($(this).attr('href')).offset().top) + 500;
    
        $("body, html").animate({ 
            scrollTop: px 
        }, 600);
        
    });
        
});
