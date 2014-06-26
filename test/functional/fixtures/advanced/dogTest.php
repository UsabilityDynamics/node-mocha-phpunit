<?php
/**
 * -
 *
 * -
 *
 * @author: potanin@UD
 * @version 0.0.1
 */
class dogTest extends PHPUnit_Framework_TestCase {

  /**
   * Test Object Extending with Defaults
   *
   */
  public function testBark() {

    /** Initialize Modules logic */
    $Sparky = new Pets\Dog( array(
      'name' => 'Sparky'
    ));

    $this->assertTrue( true, !method_exists( $Sparky, 'canMeow' ) );
    $this->assertTrue( true, method_exists( $Sparky, 'caBark' ) );

  }

}
