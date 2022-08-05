
$(function() {

  //ハンバーガーメニュー activeの付け外し
  const ham = $('#js__hamburger');
  const nav = $('#js__nav');
  ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
    $('.nav__bg').toggleClass('active');
  });

  const nav__bg = $('#js__nav__bg');
  nav__bg.on('click', function () {
    nav__bg.removeClass('active');
    ham.removeClass('active');
    nav.removeClass('active');
  });


      // ハンバーガーメニューのリンクをクリックするとメニューを閉じてスムーススクロールする

    // スクロール
    $('a[href^="#"]').click(function () {
            // ヘッダーの高さを事前に取得
      var h = $('.header').outerHeight(); // 追加
      // adjust に代入するとヘッダーの高さを取得してズラせる。
      var adjust = h; // 変更
      var speed = 800;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - adjust; //header分下にずらす
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });

    $(".scroll").on("click", function () {
      // $("#gloval-nav ul").toggleClass(.active);
      nav__bg.removeClass("active");
      ham.removeClass('active');
      nav.removeClass('active');
      });
  

      //グリッドコンテナの写真 フェードイン
      $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();
    
        $('.grid__img').each(function () {
          const targetPosition = $(this).offset().top;
          if (scroll > targetPosition - windowHeight + 100) {
            $(this).addClass("grid__fadein");
          }
        });
      });
});


//pickup のオートスクロール
$(function() {
  $('.multiple-items').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 5000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 5, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 601, // 399px以下のサイズに適用
        settings: {
        slidesToShow: 3,
        },
      },
    ],
  }); 
});


