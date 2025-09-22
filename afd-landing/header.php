<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php bloginfo('name'); ?><?php if ( is_front_page() ) { echo ' | Imersão em Provas Digitais: Da Cena do Crime ao Tribunal'; } else { wp_title(); } ?></title>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="main-header">
  <div class="header-container">
    <img
      src="<?php echo get_template_directory_uri(); ?>/image/Logo-AFD-azul-e-branco.png"
      alt="Logo da Empresa"
      class="header-logo"
    />
  </div>
</header>
