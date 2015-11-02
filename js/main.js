$(function() {
    $(".button").on("click", function( e ) {
        e.preventDefault();
        $("body, html").animate({ 
            scrollTop: $($(this).attr('href')).offset().top 
        }, "slow");
        
    });
        
});
