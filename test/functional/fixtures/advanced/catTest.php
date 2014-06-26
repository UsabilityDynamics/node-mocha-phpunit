<?php
/**
 * -
 *
 * -
 *
 * @author: potanin@UD
 * @version 0.0.1
 */
class catTest extends PHPUnit_Framework_TestCase {

  /**
   * Test Object Extending with Defaults
   *
   */
  public function testMeow() {

    /** Initialize Modules logic */
    $Sparky = new Pets\Cat( array(
      'name' => 'Squirrel'
    ));

    $this->assertTrue( true, method_exists( $Sparky, 'canMeow' ) );
    $this->assertTrue( true, !method_exists( $Sparky, 'caBark' ) );

  }

}
