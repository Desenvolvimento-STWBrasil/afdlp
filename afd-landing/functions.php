<?php
function afd_enqueue_assets() {
    // Enfileira o CSS
    wp_enqueue_style( 'afd-style', get_stylesheet_uri(), array(), '1.0' );
    // Se você quiser colocar o JS separado:
    wp_enqueue_script( 'afd-main-js', get_template_directory_uri() . '/js/main.js', array(), '1.0', true );

}
add_action( 'wp_enqueue_scripts', 'afd_enqueue_assets' );
