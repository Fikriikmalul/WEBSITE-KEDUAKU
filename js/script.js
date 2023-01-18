// event pada saat link di klik
$('.page-scroll').on('click', function(e){
    
    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);
    
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top -50
    }, 1000);
    
    e.preventDefault();
});



// paralax
// about
$(window).on('load', function(){
    $('.pkiri').addClass('pMuncul');
    $('.pkanan').addClass('pMuncul');
});


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });
    // akhir jumbotron




    // portofolio
    if(wScroll > $('.portfolio').offset().top -200){

        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }
    // akhir portofolio
});
// akhir paralax



