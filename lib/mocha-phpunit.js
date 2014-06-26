/*
 * grunt-MochaTest
 * https://github.com/SaschaGalley/grunt-MochaTest
 *
 * Copyright (c) 2013 Sascha Galley
 * http://xash.at
 * Licensed under the MIT license.
 */
function MochaTest( settings ) {
  //console.log( require( 'util' ).inspect( this, { showHidden: true, colors: true, depth: 2 } ) )

  return this.getTestSuite();

}

Object.defineProperties( MochaTest.prototype, {
  singleTestCallback: {
    value: function singleTestCallback() {

      return function( done ) {

        setTimeout(function() {
          //console.log( 'MochaTest', 'done' );
          done();

        }, 1000 );

      }

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  getTestSuite: {
    value: function getTestSuite() {

      this._tests = {
        before: this.before,
        after: this.after,
        beforeEach: this.beforeEach,
        afterEach: this.afterEach,

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

      };

      return this._tests;

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  readResult: {
    /**
     * Read Output XML
     *
     * @param path
     * @param callback
     * @returns {*}
     */
    value: function readResult( path, callback ) {

      var xml2js = require('xml2js');
      var readFile = require('fs' ).readFile;
      var parser = new xml2js.Parser();
      var resolve = require( 'path' ).resolve;

      readFile( resolve( path ), function( error, data ) {

        if( error ) {
          return callback( error, null );
        }

        parser.parseString( data, function( error, result ) {

          // @todo Normalize file so it's useful.

          callback( error, result );

        });
      });

      // @chainable
      return this;

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  before: {
    value: function before( settings ) {

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  after: {
    value: function after( settings ) {

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  beforeEach: {
    value: function beforeEach( settings ) {

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  afterEach: {
    value: function afterEach() {

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
  load: {
    /**
     * Load a phpUnit Test
     *
     * @param settings
     */
    value: function load( settings ) {

    },
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