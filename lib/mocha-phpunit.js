/*
 * grunt-phpunit
 * https://github.com/SaschaGalley/grunt-phpunit
 *
 * Copyright (c) 2013 Sascha Galley
 * http://xash.at
 * Licensed under the MIT license.
 */
 'use strict';

var tits = 'asdf';

function phpUnit( settings ) {

  //console.log( require( 'util' ).inspect( require( 'mocha' ), { showHidden: true, colors: true, depth: 2 } ) )
  //console.log( 'phpUnit' );

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

  return function( done ) {

    setTimeout(function() {
      //console.log( 'phpUnit', 'done' );
      done();

    }, 1000 );

  }


  return {};

  // Internal lib.
  var builder = require('./lib/builder').init(grunt);
  var phpunit = require('./lib/phpunit').init(grunt);

  grunt.registerMultiTask( 'phpunit', 'Run phpunit', function() {

    var directory = this.data.dir || '';

    delete this.data.dir;
    var options = this.options(this.data);

    var command = builder.build(directory, function(config) {
      // Merge task options with global options
      Object.keys(options).forEach(function(key) {
        config[key] = options[key];
      });

      return config;
    });

    // Run the command
    grunt.log.writeln('Starting phpunit (target: ' + this.target.cyan + ') in ' + builder.directory().cyan);
    grunt.verbose.writeln('Exec: ' + command);

    phpunit.run(command, this.async(), builder.config());
  });

};

module.exports = Object.defineProperties( phpUnit, {
  create: {
    value: function create() {

    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  define: {
    value: function create( options ) {

      return phpUnit( options );
    },
    enumerable: true,
    configurable: true,
    writable: true
  }
})