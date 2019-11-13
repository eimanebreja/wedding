$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    loop: true,
    autoWidth: true,
    responsive: {
        0: {
            nav: false,
            items: 1
        },
        568: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$(document).ready(function () {
    $('.popup-youtube, .popup-text').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });
});
$(document).ready(function () {
    $('.popup-text').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});

function openNavSp() {
    document.getElementById("myNavSp").style.width = "100%";
    document.getElementById("menu-contain").style.opacity = "0";
}

function closeNavSp() {
    document.getElementById("myNavSp").style.width = "0%";
    document.getElementById("menu-contain").style.opacity = "1";
}


$(function () {
    $(document).ready(function () {
        $("#link_concept").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    });
    $(document).ready(function () {
        $("#link_conceptsp").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    });
    $(document).ready(function () {
        $("#link_partyspace").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    });
    $(document).ready(function () {
        $("#link_partyspacesp").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    });
    $(document).ready(function () {
        $("#link_ceremony").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    });
    $(document).ready(function () {
        $("#link_ceremonysp").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    });
    $(document).ready(function () {
        $("#link_facility").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    });
    $(document).ready(function () {
        $("#link_facilitysp").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    });
    $(document).ready(function () {
        $("#link_cuisine").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    });
    $(document).ready(function () {
        $("#link_cuisinesp").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    });
    $(document).ready(function () {
        $("#link_photogallery").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    });
    $(document).ready(function () {
        $("#link_photogallerysp").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    });
    $(document).ready(function () {
        $("#link_access").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    });
    $(document).ready(function () {
        $("#link_accesssp").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    });

    // $('.sp-menu').hide()
    // $('a[href^="#"]').on('click', function (event) {
    //     $('.sp-menu').hide()
    //     var target = $(this).attr('href');

    //     $('.sp-menu' + target).toggle();

    // });
});