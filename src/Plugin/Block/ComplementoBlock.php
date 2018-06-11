<?php

namespace Drupal\commerce_cart_reactjs\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Render\Markup;

/**
 * Provides a cart block.
 *
 * @Block(
 *   id = "commerce_complemento_reactjs",
 *   admin_label = @Translation("Complementos (ReactJS)"),
 *   category = @Translation("Commerce")
 * )
 */
class ComplementoBlock extends BlockBase {

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
      '#markup' => Markup::create('<div id="reactCartComplement"></div>'),
    ];
  }

}
