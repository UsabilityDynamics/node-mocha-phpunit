<?php
/**
 *
 * @verison 0.0.1
 * @author potanin@UD
 * @namespace Pets
 */
namespace Pets {

  class Dog {

    /**
     *
     *
     */
    public function __construct( $options = array() ) {

      $this->options = $options;

    }

    public function getName() {
      return $this->options[ 'name' ];
    }

    public function canBark() {
      return true;
    }

  }

}

 