<?php

namespace Drupal\commerce_cart_reactjs\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Render\Markup;

/**
 * Provides a cart block.
 *
 * @Block(
 *   id = "commerce_cart_reactjs_mobile",
 *   admin_label = @Translation("Cart (ReactJS) mobile"),
 *   category = @Translation("Commerce")
 * )
 */
class CartMobile extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#attached' => [
        'library' => [
          'commerce_cart_reactjs/components',
        ],
      ],
      '#markup' => Markup::create('<div id="reactCartMobile"></div>'),
    ];
  }

}
