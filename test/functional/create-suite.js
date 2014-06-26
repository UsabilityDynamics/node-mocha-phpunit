module.exports = {

  'Can create an instance.': function() {

    this.config = require( './fixtures/options.json' );
    this.phpUnit = require( '../../' );

    this.suite = this.phpUnit.create( this.config ).getTestSuite();

    this.suite.should.be.an.instanceOf( Object );

    this.suite.should.have.property( 'before' );
    this.suite.should.have.property( 'after' );
    this.suite.should.have.property( 'beforeEach' );
    this.suite.should.have.property( 'afterEach' );

    this.suite.should.have.property( 'dynamic one' );
    this.suite.should.have.property( 'dynamic two' );

  }

}