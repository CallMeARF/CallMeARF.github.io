// Navbar Menu otomatis sembunyi pada ukuran smartphone
$(document).ready(function () {
    $('.navbar-nav a').on('click', function () {
        setTimeout(function () {
            $('.navbar-collapse').collapse('hide');
        }, 500);
    });
});

// Event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // Ambil isi href
    var tujuan = $(this).attr('href');
    // Tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // Pindahkan scroll
    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 500, 'easeOutBack');

    e.preventDefault();

});



// Parallax

// About
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // Jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px,' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 1.2 + '%)'
    });


    //Portfolio
    if (wScroll > $('.portfolio').offset().top - 200) {
        $('.portfolio .img-thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul')
            }, 300 * (i + 1));
        });

    }

});