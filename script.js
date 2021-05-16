$(document).ready(function () {
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            $("#banner").css("height", "8vh");
            $("#page").css("filter", "blur(0px)");
            $(".bannerImg").css("width", "0%");
            $(".bannerImg").fadeOut();
            $("#bannerButtons").css("width", "80vh");

        } else {
            $("#banner").css("height", "45vh");
            $("#page").css("filter", "blur(4px)");
            $(".bannerImg").fadeIn();
            $(".bannerImg").css("width", "70%");
            $("#bannerButtons").css("width", "70vh");
        }
    }
});