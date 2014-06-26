/*
 * grunt-MochaTest
 * https://github.com/SaschaGalley/grunt-MochaTest
 *
 * Copyright (c) 2013 Sascha Galley
 * http://xash.at
 * Licensed under the MIT license.
 */
function MochaTest( settings ) {

  console.log( require( 'util' ).inspect( this, { showHidden: true, colors: true, depth: 2 } ) )
  return {

    beforeEach: function() {
      // clear out spcial fields. May be due to a bug.
      this.expected = null;

    },

    'dynamic one': function( done ) {
      this.expected = 66666;
      done();
    },
    'dynamic two': function() {

      return;
      this.expected = 3323;
      var _error = new Error( 'something failed' );

      // _error.meta = 'balsdf';

      delete _error.stack;

      throw _error;

      throw {
        type: 'Special'
      };

    },
    'dynamic three': function() {}

  }

  // --include-path
  // --configuration
  // --testsuite

  return function( done ) {

    setTimeout(function() {
      //console.log( 'MochaTest', 'done' );
      done();

    }, 1000 );

  }

  return {};

}

Object.defineProperties( MochaTest.prototype, {
  create: {
    value: function create( settings ) {
      return new MochaTest( settings );
    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  utility: {
    value: {
      gruntPHPUnit: require( 'grunt-phpunit' )
    },
    enumerable: true,
    configurable: true,
    writable: true
  }
});

Object.defineProperties( module.exports = MochaTest, {
  version: {
    value: require( '../package.json' ).version,
    enumerable: true,
    configurable: true,
    writable: true
  },
  create: {
    value: function create( settings ) {
      return new MochaTest( settings );
    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  define: {
    value: function create( settings ) {
      return new MochaTest( settings );
    },
    enumerable: true,
    configurable: true,
    writable: true
  }
});