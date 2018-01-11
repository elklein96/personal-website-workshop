// Scrolling animations for links in the header and footer
$(document).on('click touchstart', '.navbar-right > li > a, .list-inline > li > a', function(e) {
    $('html, body').animate({ scrollTop: $(e.target.hash).offset().top }, 1500, 'easeInOutExpo');
});
