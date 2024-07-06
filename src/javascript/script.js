$(document).ready(function() {
    // Toggle mobile menu
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Function to highlight active navigation item
    function highlightActiveNavItem() {
        const scrollPosition = $(window).scrollTop();

        $('#nav_list a, #mobile_nav_list a').each(function() {
            var hash = this.hash;
            var targetOffset = $(hash).offset().top - $('header').outerHeight();
            var targetHeight = $(hash).outerHeight();

            if (scrollPosition >= targetOffset && scrollPosition < targetOffset + targetHeight) {
                $(this).parent().addClass('active').siblings().removeClass('active');
            } else {
                $(this).parent().removeClass('active');
            }
        });
    }

    // Initial call to highlight active navigation item
    highlightActiveNavItem();

    // Scroll event to highlight active navigation item
    $(window).on('scroll', function() {
        highlightActiveNavItem();
    });

    // ScrollReveal animations
    ScrollReveal().reveal('#cta, #banner, #menu, #parceiros, #about', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });
});
