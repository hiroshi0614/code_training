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

/*--- 無料相談 ---------*/

$(function() {
  var topBtn = $('#top__btn');
  topBtn.hide();  
  //スマホ時にスクロールが600に達したらボタン表示
  var windowWidth = $(window).width();
  var windowSm = 750;
  if (windowWidth <= windowSm) {
  $(window).scroll(function () {
      if ($(this).scrollTop() > 700) {
      //ボタンの表示方法
          topBtn.fadeIn();
      } else {
      //ボタンの非表示方法
          topBtn.fadeOut();
      }
  });
  } else {
    topBtn.hide();
  }
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

/*--- スムーススクロール　-------*/
$(function(){
    // スムーススクロール
  $('a[href^="#"]').click(function () {
    // ヘッダーの高さを事前に取得
  var adjust = -150
  var speed = 1000;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top + adjust;
  $('body,html').animate({ scrollTop: position }, speed, 'swing');
  return false;
  });
});