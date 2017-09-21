<?php
namespace Grav\Theme;

use Grav\Common\Theme;

class Designtopia extends Theme
{
  /**
   * Push styles to Admin-plugin via Assets Manager
   * @return void
   */
  public function onPageInitialized()
  {
    if ($this->isAdmin()) {
      $this->grav['assets']->addCss('theme://css/admin-style.css', 9);
    }
  }
}
