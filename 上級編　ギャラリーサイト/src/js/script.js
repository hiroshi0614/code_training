$(function(){

  const ham = $('#js__hamburger');
  const nav = $('#js__nav');
  ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
  });
  

      // スムーススクロール
      $('a[href^="#"]').click(function () {
        // ヘッダーの高さを事前に取得
      var speed = 1000;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });

    $(".scroll").on("click", function () {
      ham.removeClass('active');
      nav.removeClass('active');
      });
  /*=================================================
  スクロール時のイベント
  ===================================================*/
  $(window).scroll(function() {
    // スクロール位置を取得
    let scroll = $(window).scrollTop();

    /*=================================================
    メインビジュアルの拡大・縮小
    ===================================================*/
    mv_scale(scroll);


    /*=================================================
    サイドボタンを表示
    ===================================================*/
    // 画面下から#galleryまでの距離を取得
    let gallery_position = $('#gallery').offset().top - $(window).height();
    // 画面下から#accessまでの距離を取得
    let access_position = $('#access').offset().top - $(window).height();

    // window.innerWidthで画面幅を取得
    // PC表示の場合の処理（画面幅が900pxより大きい場合　※900pxはCSSのブレークポイントとあわせる）
    if (window.innerWidth > 900) {
      // .galleryが表示された場合（スクロール位置が、画面下から.galleryまでの距離を超えた場合）
      if(scroll > gallery_position){
        // .accessが表示されるまでの間は、.sidebarを横からスライドさせて表示する
        if(scroll < access_position){
          $('.sidebar').css({
            'transform': 'rotate(-90deg) translateY(0)'
          });
        // .accessが表示されたら、.sidebarをスライドさせて非表示にする
        } else {
          $('.sidebar').css({
            'transform': 'rotate(-90deg) translateY(60px)'
          });
        }
      // .galleryが表示される前は、.sidebarをスライドさせて非表示にする
      } else {
        $('.sidebar').css({
          'transform': 'rotate(-90deg) translateY(60px)'
        });
      }
    }

    /*=================================================
    Accessの背景画像を表示
    ===================================================*/
    // 画面下から#contactまでの距離を取得
    let contact_position = $('#contact').offset().top - $(window).height();

    // #accessが表示された場合
    if(scroll > access_position){
      // #contactが表示されるまでの間は、背景画像をfadeInで表示する
      if(scroll < contact_position){
        $('.bg').fadeIn(500);
      } else {
        $('.bg').fadeOut(500);
      }
    // #accessが表示される前の場合
    } else {
      // 背景画像を表示しない
      $('.bg').fadeOut(500);
    }
  });

  /*=================================================
  画面読み込み時と画面幅変更時のイベント
  ===================================================*/
  $(window).on('load resize', function() {
    // スクロール位置を取得
    let scroll = $(window).scrollTop();

    /*=================================================
    メインビジュアルの拡大・縮小
    ===================================================*/
    mv_scale(scroll);
  });
});

/*=================================================
メインビジュアルの拡大・縮小（共通処理）
===================================================*/
function mv_scale(scroll) {
  // window.innerWidthで画面幅を取得
  // PC表示の場合の処理（画面幅が900pxより大きい場合　※900pxはCSSのブレークポイントとあわせる）
  if (window.innerWidth > 900) {
    // メインビジュアルのCSS（width）を変更する
    // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
    $('.mainVisual__img').css({
      'width': 100/3 + scroll/10  + '%'
    });
  // スマホ表示の場合の処理（画面幅が900px以下の場合）
  } else {
    // メインビジュアルのCSS（width）を変更する
    // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
    $('.mainVisual__img').css({
      'width': 100 - scroll/10  + '%'
    });
  }
}

//heder　スクロールして表示

jQuery(function() {
  var pagetop = $('#logo , #js__hamburger');   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 520) {  //520pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
    });
});

//　テキスト等フェードイン
  $('.fadein').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).stop().addClass('active');
    }
  });