

<?php

/*--- アイキャッチの有効化 ----*/
add_theme_support('post-thumbnails');

/**************************************************
CSSファイルの読み込み
**************************************************/
function my_enqueue_styles() {
  wp_enqueue_style('ress', '//unpkg.com/ress/dist/ress.min.css', array(), false, 'all');
  wp_enqueue_style('style', get_stylesheet_uri(), array('ress'), false, 'all');
}
add_action('wp_enqueue_scripts', 'my_enqueue_styles');

/**************************************************
JSファイルの読み込み
**************************************************/
function st_enqueue_scripts() {
  wp_deregister_script('jquery');
  wp_enqueue_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', array(), '3.5.1', false);
  wp_enqueue_script('main', get_theme_file_uri('js/main.js'), array('jquery'), false, true);
}
add_action('wp_enqueue_scripts', 'st_enqueue_scripts');


//ページネーション
function pagination($pages = '', $range = 2) {
  $showitems = ($range * 2) + 1;

  // 現在のページ数
  global $paged;
  if(empty($paged)) {
  $paged = 1;
  }

  // 全ページ数
  if($pages == '') {
  global $wp_query;
  $pages = $wp_query->max_num_pages;
  if(!$pages) {
      $pages = 1;
  }
  }

  // ページ数が2ぺージ以上の場合のみ、ページネーションを表示
  if(1 != $pages) {
  echo '<div class="pagination">';
  echo '<ul class="page">';
  // 1ページ目でなければ、「前のページ」リンクを表示
  if($paged > 1) {
      echo '<li class="prev page__active"><a href="' . esc_url(get_pagenum_link($paged - 1)) . '">PREV</a></li>';
  }

  // ページ番号を表示（現在のページはリンクにしない）
  for ($i=1; $i <= $pages; $i++) {
      if (1 != $pages &&(!($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems )) {
      if ($paged == $i) {
          echo '<li class="page__active">' .$i. '</li>';
      } else {
          echo '<li class="page__active"><a href="' . esc_url(get_pagenum_link($i)) . '">' .$i. '</a></li>';
      }
      }
  }

    // 最終ページでなければ、「次のページ」リンクを表示
  if ($paged < $pages) {
      echo '<li class="next page__active"><a href="' . esc_url(get_pagenum_link($paged + 1)) . '">NEXT</a></li>';
  }
  echo '</ul>';
  echo '</div>';
  }
}