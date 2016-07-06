// Generated on 2016-03-30 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin',
        ngtemplates: 'grunt-angular-templates',
        cdnify: 'grunt-google-cdn'
    });

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // references package.json so it can load plugins automatically
        // this way we dont have to do this for every plugin:
        // grunt.loadNpmTasks('grunt-express-server');
        //pgk: grunt.file.readJSON('package.json'),

        // Project settings
        yeoman: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
          bower: {
            files: ['bower.json'],
            tasks: ['wiredep']
          },
          js: {
            files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
            tasks: ['newer:jshint:all', 'newer:jscs:all'],
            options: {
              livereload: '<%= connect.options.livereload %>'
            }
          },
          jsTest: {
            files: ['test/spec/{,*/}*.js'],
            tasks: ['newer:jshint:test', 'newer:jscs:test', 'karma']
          },
          styles: {
            files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
            tasks: ['newer:copy:styles', 'postcss']
          },
          gruntfile: {
            files: ['Gruntfile.js']
          },
          livereload: {
            options: {
              livereload: '<%= connect.options.livereload %>'
            },
            files: [
              '<%= yeoman.app %>/{,*/}*.html',
              '.tmp/styles/{,*/}*.css',
              '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
          },


            // express: {
            //     files: ['**/*.js'],
            //     tasks:  ['express'],
            //     options: {
            //         spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
            //     }
            // }
        },

        // The actual grunt server settings
        connect: {
          options: {
            port: 9000,
            // Change this to '0.0.0.0' to access the server from outside.
            hostname: 'localhost',
            livereload: 35729
          },
          livereload: {
            options: {
              open: true,
              middleware: function (connect) {
                return [
                  connect.static('.tmp'),
                  connect().use(
                    '/app/bower_components',
                    connect.static('./app/bower_components')
                  ),
                  connect().use(
                    '/app/styles',
                    connect.static('./app/styles')
                  ),
                  connect.static(appConfig.app)
                ];
              }
            }
          },
          test: {
            options: {
              port: 9001,
              middleware: function (connect) {
                return [
                  connect.static('.tmp'),
                  connect.static('test'),
                  connect().use(
                    '/app/bower_components',
                    connect.static('./app/bower_components')
                  ),
                  connect.static(appConfig.app)
                ];
              }
            }
          },
          dist: {
            options: {
              open: true,
              base: '<%= yeoman.dist %>'
            }
          }
        },

        // Make sure there are no obvious mistakes
        jshint: {
          options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
          },
          all: {
            src: [
              'Gruntfile.js',
              '<%= yeoman.app %>/scripts/{,*/}*.js'
            ]
          },
          test: {
            options: {
              jshintrc: 'test/.jshintrc'
            },
            src: ['test/spec/{,*/}*.js']
          }
        },

        // Make sure code styles are up to par
        jscs: {
          options: {
            config: '.jscsrc',
            verbose: true
          },
          all: {
            src: [
              'Gruntfile.js',
              '<%= yeoman.app %>/scripts/{,*/}*.js'
            ]
          },
          test: {
            src: ['test/spec/{,*/}*.js']
          }
        },

        // Empties folders to start fresh
        clean: {
          dist: {
            files: [{
              dot: true,
              src: [
                '.tmp',
                '<%= yeoman.dist %>/{,*/}*',
                '!<%= yeoman.dist %>/.git{,*/}*'
              ]
            }]
          },
          server: '.tmp'
        },

        // Add vendor prefixed styles
        postcss: {
          options: {
            processors: [
              require('autoprefixer-core')({browsers: ['last 1 version']})
            ]
          },
          server: {
            options: {
              map: true
            },
            files: [{
              expand: true,
              cwd: '.tmp/styles/',
              src: '{,*/}*.css',
              dest: '.tmp/styles/'
            }]
          },
          dist: {
            files: [{
              expand: true,
              cwd: '.tmp/styles/',
              src: '{,*/}*.css',
              dest: '.tmp/styles/'
            }]
          }
        },

        // Automatically inject Bower components into the app
        wiredep: {

          // inject components into index.html
          app: {
            src: ['<%= yeoman.app %>/index.html'],
            ignorePath:  /\.\.\//
          },

          // inject components into karma config file
          test: {
            devDependencies: true,
            src: '<%= karma.unit.configFile %>',
            ignorePath:  /\.\.\//,
            fileTypes: {
              js: {
                block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
                detect: {
                  js: /'(.*\.js)'/gi
                },
                replace: {
                  js: '\'{{filePath}}\','
                }
              }
            }
          }
        },

        // Renames files for browser caching purposes
        filerev: {
          dist: {
            src: [
              '<%= yeoman.dist %>/scripts/{,*/}*.js',
              '<%= yeoman.dist %>/styles/{,*/}*.css',
              '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
              '<%= yeoman.dist %>/styles/fonts/*'
            ]
          }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
          html: '<%= yeoman.app %>/index.html',
          options: {
            dest: '<%= yeoman.dist %>',
            flow: {
              html: {
                steps: {
                  js: ['concat', 'uglifyjs'],
                  css: ['cssmin']
                },
                post: {}
              }
            }
          }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
          html: ['<%= yeoman.dist %>/{,*/}*.html'],
          css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
          js: ['<%= yeoman.dist %>/scripts/{,*/}*.js'],
          options: {
            assetsDirs: [
              '<%= yeoman.dist %>',
              '<%= yeoman.dist %>/images',
              '<%= yeoman.dist %>/styles'
            ],
            patterns: {
              js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
            }
          }
        },

        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/styles/main.css': [
        //         '.tmp/styles/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },
        uglify: {
            options: {
                report: 'min',
                mangle: false
            }
        },
        // concat: {
        //   dist: {}
        // },

        imagemin: {
          dist: {
            files: [{
              expand: true,
              cwd: '<%= yeoman.app %>/images',
              src: '{,*/}*.{png,jpg,jpeg,gif}',
              dest: '<%= yeoman.dist %>/images'
            }]
          }
        },

        svgmin: {
          dist: {
            files: [{
              expand: true,
              cwd: '<%= yeoman.app %>/images',
              src: '{,*/}*.svg',
              dest: '<%= yeoman.dist %>/images'
            }]
          }
        },

        htmlmin: {
          dist: {
            options: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              collapseBooleanAttributes: true,
              removeCommentsFromCDATA: true
            },
            files: [{
              expand: true,
              cwd: '<%= yeoman.dist %>',
              src: ['*.html'],
              dest: '<%= yeoman.dist %>'
            }]
          }
        },

        ngtemplates: {
          dist: {
            options: {
              module: 'meanMarkdownApp',
              htmlmin: '<%= htmlmin.dist.options %>',
              usemin: 'scripts/scripts.js'
            },
            cwd: '<%= yeoman.app %>',
            src: 'views/{,*/}*.html',
            dest: '.tmp/templateCache.js'
          }
        },

        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
          dist: {
            files: [{
              expand: true,
              cwd: '.tmp/concat/scripts',
              src: '*.js',
              dest: '.tmp/concat/scripts'
            }]
          }
        },

        // Replace Google CDN references
        cdnify: {
          dist: {
            html: ['<%= yeoman.dist %>/*.html']
          }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '*.html',
                        'images/{,*/}*.{webp}',
                        'styles/fonts/{,*/}*.*'
                    ]
                },{
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: ['generated/*']
                }, {
                    expand: true,
                    cwd: 'bower_components/bootstrap/dist',
                    src: 'fonts/*',
                    dest: '<%= yeoman.dist %>'
                }]
            },

            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
          server: [
            'copy:styles'
          ],
          test: [
            'copy:styles'
          ],
          dist: [
            'copy:styles',
            'imagemin',
            //'svgmin'
          ]
        },

        // Test settings
        karma: {
          unit: {
            configFile: 'test/karma.conf.js',
            singleRun: false  // overwrites config setting
          }
        },

        // express server settings (use my custom server instead of default grunt serve)
        express: {
          server: {
              options: {
                  script: 'server.js'
              }
          }
        }
    });

    // load all plugins automatically using the package.json file
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('serve', 'Compile then start the express web server', function () {
        /*if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }*/

        grunt.task.run([
          //'clean:server',
          'wiredep',
          //'concurrent:server',
          //'postcss:server',
          'express',  // added this to use custom express server
          //'connect:livereload',
          'watch'
        ]);
    });

    grunt.registerTask('test', [
        //'clean:server',
        'wiredep',
        //'concurrent:test',
        //'postcss',
        'connect:test',   // connect to test server
        'karma'
    ]);

    grunt.registerTask('build', [

        // deletes /dist
        'clean:dist',

        // update bower references
        'wiredep',

        // prepares files for concat, uglify and cssmin (in memory)
        'useminPrepare',

        // do multiple tasks concurrently (at the same time)
        // run image minify and copy them to /dist
        // and copy styles to .tmp
        'concurrent:dist',

        'postcss',

        // stores all angular views/templates in .tmp/templateCache.js
        // also adds a reference to it into the final index.html
        'ngtemplates',

        // creates vendor.js and scripts.js (just merges, doesnt minify)
        // copies them to folder .tmp/concat/scripts
        'concat',

        // makes angular-files in .tmp/concat/scripts save for minification
        'ngAnnotate',

        // copy app files to /dist (all but javascript and css files in .tmp)
        'copy:dist',

        //'cdnify',  // replaces bower components with cdns when possible

        // minify styles in .tmp/styles and copies them to /dist
        'cssmin',

        // minifies vendor.js and scripts.js in .tmp/concat/scipts and copies
        // the result to /dist/scripts
        'uglify',

        // gives cryptic names to files :) (browser caching)
        'filerev',

        // replaces references to scripts and styles in index.html with links
        // to the minified versions (vender.js, scripts.js, vendor.css, main.css)
        'usemin',

        // minify index.html
        'htmlmin'
    ]);

    /*grunt.registerTask('default', [
        'newer:jshint',
        'newer:jscs',
        'test',
        'build'
    ]);*/
};
