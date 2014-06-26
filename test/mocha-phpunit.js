module.exports = {  

  'Has expected public methods.': function() {

    var target = require( '../' );

    target.should.have.property( 'define' );
    target.should.have.property( 'create' );
    target.should.have.property( 'version' );
    target.should.have.property( 'prototype' );

  },

  'Can create actual test.': function() {


  }

}