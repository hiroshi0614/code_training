const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
  $('.nav__bg').toggleClass('active');
});

const nav__bg = $('#js-nav__bg');
nav__bg.on('click', function () {
  nav__bg.removeClass('active');
  ham.removeClass('active');
  nav.removeClass('active');
});
