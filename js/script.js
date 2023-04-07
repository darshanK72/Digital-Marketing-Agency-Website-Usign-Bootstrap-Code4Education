// Scrolling Effect
let nav = document.querySelector(".navbar");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20)
    {
        nav.classList.add("header-scrolled");
    }
    else
    {
        nav.classList.remove("header-scrolled");
    }
}



$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:6,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:12220,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1300:{
                items:6
            }
        }
    });
})