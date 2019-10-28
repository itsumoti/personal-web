// event pada saat link di klik
$('.page-link').on('click', function(e) {

    //ambil isi ref
    var tujuan = $(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    //pindahkan scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top
    })

});