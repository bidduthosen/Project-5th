$(function($){

    // banner jss

    $('#banner').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 3000,
        arrows: false,
    });

    //Portfolio js

    $('.Portfolio_team_js').slick({
        slidesToShow: 3,
        speed: 1000,
    });

    //Latest_Blogs_items js

    $('.Latest_Blogs_items').slick({
        slidesToShow: 3,
        speed: 1000,
    });

    //Our_Services js

    $('.Our_Services_items').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false
    });

    //wow js

    new WOW().init();


     //venobox

     new VenoBox({
        selector: '.venobox',
        spinner: 'plane',
    });

});