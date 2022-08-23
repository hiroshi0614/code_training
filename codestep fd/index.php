<?php get_header(); ?>

  <main class="wrapper">

<!--- grid ------>
<div class="top">
    <ul class="container">
      <?php
        $args = array(
          'posts_per_page' => 8
        );
      ?>
      <?php $posts = get_posts($args); ?>
      <?php foreach($posts as $post): ?>
        <?php setup_postdata($post); ?>

        <li class="grid__container grid__item1">
          <a href="<?php the_permalink(); ?>" class="image">
            <img src="<?php the_post_thumbnail_url('full'); ?>" alt="">
            <p><?php the_title(); ?></p>
            <p>&yen;<?php echo esc_html(get_post_meta($post->ID, 'price', true)); ?> +tax</p>
          </a>
        </li>
      <?php endforeach; ?>
      <?php wp_reset_postdata(); ?>
    </ul>

    <a class="more" href="<?php echo esc_url(home_url('/category/products/')); ?>">View More</a>
  </div>
</main>

<?php get_footer(); ?>