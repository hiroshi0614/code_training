const ham = $('#js__hamburger');
const nav = $('#js__nav');
const nav__bg = $('#js__nav__bg');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
  nav__bg.toggleClass('active');
});

nav__bg.on('click', function () { //ハンバーガーメニュー表示時の背景の付け外し
  nav__bg.removeClass('active');
  ham.removeClass('active');
  nav.removeClass('active');
});

jQuery(function() {
  var pagetop = $('#page_top');   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 700) {  //700pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); //0.5秒かけてトップへ移動
      return false;
  });
});
