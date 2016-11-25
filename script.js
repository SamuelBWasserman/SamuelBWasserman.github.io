$(document).ready(function () {
    $('.aboutme').mouseenter(function () {
        $(this).addClass('grow');
    });
      $('.aboutme').mouseleave(function () {
        $(this).removeClass('grow');
    });
});