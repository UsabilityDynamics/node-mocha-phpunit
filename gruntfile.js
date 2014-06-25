/**
 * Node.js Module Build
 *
 * @author potanin@UD
 * @version 0.0.2
 * @param grunt
 */
module.exports = function( grunt ) {

  // Require Utility Modules.
  var joinPath  = require( 'path' ).join;
  var findup    = require( 'findup-sync' );

  // Automatically Load Tasks.
  require( 'load-grunt-tasks' )( grunt, {
    pattern: 'grunt-*',
    config: './package.json',
    scope: 'devDependencies'
  });
  
  grunt.initConfig({

    // Sets generic config settings, callable via grunt.config.get('meta').environment or <%= grunt.config.get("meta").environment %>
    meta: {
      name: grunt.file.readJSON( findup( 'package.json' ) ).name,
      description: grunt.file.readJSON( findup( 'package.json' ) ).description,
      version: grunt.file.readJSON( findup( 'package.json' ) ).version,
      homepage: grunt.file.readJSON( findup( 'package.json' ) ).homepage,
      environment: process.env.NODE_ENV || 'production',
      ci: process.env.CI || process.env.CIRCLECI ? true : false      
    },

    // Read Configuration File.
    config: grunt.file.readJSON( findup( 'package.json' ) ).config,
    
    mochaTest: {
      options: {
        require: [ 'should' ],
        reporter: 'list',
        ui: 'exports'
      },
      all: [ 'test/*.js' ]
    },

    yuidoc: {
      compile: {
        name: '<%= meta.name %>',
        description: '<%= meta.description %>',
        version: '<%= meta.version %>',
        url: '<%= meta.homepage %>',
        logo: 'http://media.usabilitydynamics.com/logo.png',
        options: {
          paths: [ "./bin", "./lib" ],
          outdir: './static/codex'
        }
      }
    },

    jscoverage: {
      options: {
        inputDirectory: 'lib',
        outputDirectory: './static/lib-cov',
        highlight: true
      }
    },

    watch: {
      options: {
        interval: 1000,
        debounceDelay: 500
      },
      docs: {
        files: [ 'readme.md' ],
        tasks: [ 'markdown' ]
      }
    },

    markdown: {
      all: {
        files: [ {
          expand: true,
          src: 'readme.md',
          dest: 'static/',
          ext: '.html'
        }
        ],
        options: {
          // preCompile: function preCompile( src, context ) {},
          // postCompile: function postCompile( src, context ) {},
          templateContext: {},
          markdownOptions: {
            gfm: true,
            codeLines: {
              before: '<span>',
              after: '</span>'
            }
          }
        }
      }
    },

    clean: [],

    shell: {
      install: {},
      update: {}
    }

  });

  // Build Assets
  grunt.registerTask( 'default', [ 
    'markdown', 
    'yuidoc', 
    'jscoverage', 
    'mochaTest' 
  ]);

  // Install Environment
  grunt.registerTask( 'install', function( task ) {
    
  });

  // Prepare for Publish.
  grunt.registerTask( 'prepublish', function( task ) {
    
  });

  // After Publish.
  grunt.registerTask( 'publish', function( task ) {
    
  });

  // Run Tests.
  grunt.registerTask( 'test', function( task ) {
    grunt.task.run( 'mochaTest' )    
  });

};