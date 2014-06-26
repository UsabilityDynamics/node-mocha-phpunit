module.exports = {  

  'can run test programatically using run() method.': function( done ) {

    this.config = require( './fixtures/options.json' );
    this.phpUnit = require( '../../' );

    this.instance = this.phpUnit.create( this.config );
    this.suite = this.instance.getTestSuite();

    this.instance.run( function( error, result ) {

      result.should.have.properties( 'testSuites', 'coverage', 'artifacts' )

      done();

    });

  }

}