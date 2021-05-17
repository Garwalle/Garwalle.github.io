$(document).ready(function () {
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            $("#banner").css("height", "8%");
            $("#page").css("filter", "blur(0px)");
            $(".bannerImg").css("width", "0");
            $(".bannerImg").fadeOut(450).promise().done(function () {
                $("#blanckNB").css("width", "100%");
                $("#NBImg").css("width", "18%");
            });

        } else {
            $("#NBImg").css("width", "0%");
            $("#blanckNB").css("width", "0").promise().done(function () {
                $("#banner").css("height", "45%");
                $("#page").css("filter", "blur(4px)");
                $(".bannerImg").fadeIn();
                $(".bannerImg").css("width", "70%");
            });
        }
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}