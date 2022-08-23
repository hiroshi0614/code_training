<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="<?php echo esc_url(get_theme_file_uri('img/favicon.ico')); ?>">
  <meta name="description" content="<?php bloginfo('description'); ?>">
  <title><?php echo bloginfo('name'); ?></title>

  <?php wp_head(); ?>
</head>
<body>
<!--- header ---------->
    <header class="header">
      <div class="header__fixed wrapper">
        <h1 class="logo">
          <a href="<?php echo esc_url(home_url()); ?>">
            <img src="<?php echo esc_url(get_theme_file_uri('img/logo.svg')); ?>" alt="Furniture Design">
          </a>
        </h1>

        <nav class="nav" id="js-nav">
          <ul class="nav__list">
            <li class="nav__item"><a href="<?php echo esc_url(home_url('/category/products/')); ?>">PRODUCTS</a></li>
            <li class="nav__item"><a href="<?php echo esc_url(home_url('/about/')); ?>">ABOUT</a></li>
            <li class="nav__item"><a href="<?php echo esc_url(home_url('/company/')); ?>">COMPANY</a></li>
            <li class="nav__item"><a href="mailto:info@example.com?subject=お問い合わせ">CONTACT</a></li>
          </ul>
        </nav>

        <div class="header__hamburger hamburger" id="js-hamburger">
          <span></span>
          <span></span>
        </div>

        <div class="nav__bg" id="js-nav__bg"></div>
      </div> 
    </header>