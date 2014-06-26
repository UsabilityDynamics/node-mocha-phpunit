module.exports = {

  'can parse raw junit output': function( done ) {

    this.phpUnit = require( '../../' );

    this.phpUnit.prototype.readResult( 'test/unit/fixtures/phpunit-log.xml', function( error, data ) {

      // console.log( require( 'util' ).inspect( data, { showHidden: true, colors: true, depth: 2 } ) )

      done();

    })

  }
}