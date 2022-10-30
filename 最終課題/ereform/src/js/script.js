/*--- mainvisual --------*/
$(function() {
	setTimeout(function(){
		$('.main__img__pc' , '.main__img__sp').fadeIn(1600);
	},50); //画像をフェードイン!
	setTimeout(function(){
		$('.main__bg').fadeOut(500);
	},50); //真っ白背景をフェードアウト！
});

/*--- ハンバーガーメニュー　---------*/
const ham = $('#js__hamburger');
const nav = $('#js__nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
});

/*--- page__top -------*/

jQuery(function() {
  var pagetop = $('#page__top');   
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

/*--- slickスライドショー　------*/
$(function () {
  // メイン画像のオプション
  $(".slider").slick({
    autoplay: true, // 自動再生ON
    adaptiveHeight: true,
    centerMode: true,
    variableWidth: true,
    dots: true,        //スライドしたのドット
    prevArrow: '<img src="img/icon/left_arrow.svg" class="slide-arrow prev-arrow">',  //矢印の画像
    nextArrow: '<img src="img/icon/right_arrow.svg" class="slide-arrow next-arrow">', //矢印の画像
  });
});

