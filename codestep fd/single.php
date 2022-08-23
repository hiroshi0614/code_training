
<?php get_header(); ?>

<!--- main ----------->
<main class="top wrapper">
  <?php if(have_posts()): ?>
    <?php while(have_posts()):the_post(); ?>

    <div class="subtitle">
      <h2><?php the_title(); ?></h2>
    </div>

    <div class="item">
      <div class="item__img">
        <img src="<?php the_post_thumbnail_url('full'); ?>" alt="item">
      </div>

      <div class="explanation">
        <?php the_content(); ?>
        <p>&yen;<?php echo esc_html(get_post_meta(get_the_ID(), 'price', true)); ?> +tax</p>
        <dl class="item__text">
          <dt>SIZE:</dt>
          <dd><?php echo esc_html(get_post_meta(get_the_ID(), 'size', true)); ?></dd>
          <dt>COLOR:</dt>
          <dd><?php echo esc_html(get_post_meta(get_the_ID(), 'color', true)); ?></dd>
          <dt>MATERIAL:</dt>
          <dd><?php echo esc_html(get_post_meta(get_the_ID(), 'material', true)); ?></dd>
        </dl>
      </div>
    </div><!--- /.item -------->

    <?php endwhile; ?>
  <?php endif; ?>

    <div class="back">
      <a href="<?php echo esc_url(home_url('/category/products/')); ?>">
        Back To Products
      </a>
    </div>

</main>

<?php get_footer(); ?>