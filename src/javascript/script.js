$(document).ready(function() {
    // Toggle mobile menu
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Smooth scrolling for anchor links
    $('#nav_list a, #mobile_nav_list a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var targetOffset = $(hash).offset().top - $('header').outerHeight();

            // Smooth scroll to the target section
            $('html, body').animate({
                scrollTop: targetOffset
            }, 100);

            // Add 'active' class to clicked navigation item
            $(this).parent().addClass('active').siblings().removeClass('active');
        }
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

    // ScrollReveal animations
    ScrollReveal().reveal('#cta, #banner, #menu, #parceiros, #about', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });
});
