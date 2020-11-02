$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 1000
    });
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#Carousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
            $('#Carousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    $('#loginButton').click(function() {
        $('#loginModal').modal();
    });
    $('#reserveButton').click(function() {
        $('#reserveModal').modal();
    });
});