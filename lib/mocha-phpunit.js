/**
 *
 * @todo Add a test to ensure "phpunit" binary is found and wokrs.
 *
 */
function MochaTest( settings ) {
  //console.log( require( 'util' ).inspect( this, { showHidden: true, colors: true, depth: 2 } ) )

  Object.defineProperties( this, {
    child: {
      value: null,
      enumerable: false,
      configurable: true,
      writable: true
    },
    settings: {
      value: settings || {},
      enumerable: false,
      configurable: true,
      writable: true
    },
    outputPaths: {
      value: {},
      enumerable: false,
      configurable: true,
      writable: true
    }
  });

  // @todo Use "which" module to see if a phpunit bin already exists.
  this.settings.bin = this.settings.bin || require( 'path' ).resolve( 'vendor/bin/phpunit' );

  return this;

}

Object.defineProperties( MochaTest.prototype, {
  run: {
    /**
     * Run Tests
     *
     * @param done
     * @returns {*}
     */
    value: function run( done ) {

      var spawn = require( 'child_process' ).spawn;
      var resolve = require( 'path' ).resolve;
      var joinPath = require( 'path' ).join;
      var tempDir = require( 'tmp' ).dir;
      var self = this;

      function _tempDirCreated( error, path ) {

        this.outputPaths= {
          coverage: joinPath( path, 'coverage.xml' ),
          log: joinPath( path, 'log-junit.xml' )
        };

        var _args = [
          '--configuration',    resolve( this.settings.configuration ),
          '--testsuite',        this.settings.testsuite,
          '--coverage-clover',  this.outputPaths.coverage,
          '--log-junit',        this.outputPaths.log
        ];

        this.child = spawn( self.settings.bin, _args ).on( 'close', function( code, signal ) {
          MochaTest.debug( 'child:close', code );

          self.readResult( self.outputPaths.log, function( error, log ) {

            done( error, {
              coverage: {},
              testSuites: log ? log.testsuites : {},
              artifacts: self.outputPaths || {}
            });

          });


        });

        this.child.stdout.on( 'data', function(data) {
          MochaTest.debug( data.toString() );
        });

        this.child.stderr.on( 'data', function(data) {
          MochaTest.debug( data.toString() );
        });

      }

      tempDir( { prefix: 'phpunit-artifacts' }, _tempDirCreated.bind( this ));

      return this;

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
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
      var resolve = require( 'path' ).resolve;

      // Attempting to normalize.
      var parser = new xml2js.Parser({
        mergeAttrs: true,
        explicitArray: false
      });

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
  debug: {
    value: require( 'debug' )( 'mocha:phpunit' ),
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