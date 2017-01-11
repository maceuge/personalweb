
$(document).ready(function () {
    var docpos = $(document).scrollTop();

    if (docpos >= 100) {
        $('.nav-background').show();
        $('.navbar').css("box-shadow", "0px 1px 8px #555555");
    }

    $(window).scroll(function(){
        if (window.pageYOffset >= 100) {
            $('.nav-background').fadeIn(400);
            $('.navbar').css("box-shadow", "0px 1px 8px #555555");
        } else {
            $('.nav-background').fadeOut(400);
            $('.navbar').css("box-shadow", "0px 0px 0px");
        }
    });
});
    
