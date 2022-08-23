<?php get_header(); ?>

<main class="wrapper">
  <div class="top">
    <?php
      $cat = get_the_category();
      $catname = $cat[0]->cat_name;
    ?>
    <div class="subtitle">
      <h1><?php echo $catname; ?></h1>
    </div>
    <ul class="container">
      <?php if(have_posts()): ?>
        <?php while(have_posts()):the_post(); ?>
          <li class="grid__container grid__item1">
            <a href="<?php the_permalink(); ?>" class="image">
              <img src="<?php the_post_thumbnail_url('full'); ?>" alt="">
              <p><?php the_title(); ?></p>
              <p>&yen;<?php echo esc_html(get_post_meta($post->ID, 'price', true)); ?> +tax</p>
            </a>
          </li>
        <?php endwhile; ?>
      <?php endif; ?>
    </ul>
    <div class="more">
      <?php
        if (function_exists("pagination")) {
          pagination($wp_query->max_num_pages);
        }
      ?>
    </div>
  </div>
</main>

<?php get_footer(); ?>