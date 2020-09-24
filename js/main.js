jQuery(($) => {
    $('.selecttype').on('click', '.selecttype__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.selecttype__head').removeClass('open');
            $('.selecttype__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.selecttype').on('click', '.selecttype__item', function () {
        $('.selecttype__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.selecttype').length) {
            $('.selecttype__head').removeClass('open');
            $('.selecttype__list').fadeOut();
        }
    });
});

jQuery(($) => {
    $('.selectsize').on('click', '.selectsize__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.selectsize__head').removeClass('open');
            $('.selectsize__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.selectsize').on('click', '.selectsize__item', function () {
        $('.selectsize__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.selectsize').length) {
            $('.selectsize__head').removeClass('open');
            $('.selectsize__list').fadeOut();
        }
    });
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        navText: ["<img src='../img/sliderarrowleft.png'>","<img src='../img/sliderarrowright.png'>"],
        dotsData: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

