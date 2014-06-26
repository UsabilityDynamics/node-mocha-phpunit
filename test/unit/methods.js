module.exports = {  

  'define method is valid': function() {
    this.phpUnit = require( '../../' );
    this.phpUnit.should.be.an.instanceOf( Function );
    this.phpUnit.should.have.property( 'define' );
  },

  'create method is valid': function() {
    require( '../../' ).should.have.property( 'create' );
  },

  'load method is valid': function() {
    require( '../../' ).should.have.property( 'load' );
  }

}