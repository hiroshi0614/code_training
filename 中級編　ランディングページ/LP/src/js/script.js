const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
});

$(function(){
  $(".slide__slick").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
  });

  $('.cause__wrap__left').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).stop().addClass('left__active');
    }
  });

  $('.cause__wrap__right').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).stop().addClass('right__active');
    }
  });

  $('.voice__container').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).stop().addClass('voice__active__left');
    }
  });

  $('.voice__container__right').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).stop().addClass('voice__active__right');
    }
  });
});