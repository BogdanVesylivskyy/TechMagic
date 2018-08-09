$(document).ready(function(){
    $('a[href^="#"]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - -10
        }, 800);
        e.preventDefault();
    });
    return false;
});








$(document).ready(function(){

    $('#home').css({
        'height': $(window).height()
    });

    $('.owl-carousel').owlCarousel({
        autoplay: true,
        center: true,
        loop: true,
        nav: true,
        autoplayHoverPause: true,
        autoplaySpeed:5000,
        items: 6,
        animateIn: 'linear',
        animateOut: 'linear',
        margin: 10,
        stagePadding: 20, 
        responsive:{ 
            0:{
                items:1
            },
            768:{
                items:2
            },
            970:{
                items:3
            }
        }
    })


    $(function() {
        var header = $("header");
        
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 46) {
                header.addClass("scrolled");
            } else {
                header.removeClass("scrolled");
            }
        });
        
    });
    

});


