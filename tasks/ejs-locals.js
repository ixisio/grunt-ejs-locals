/*
 * grunt-ejs-locals
 * https://github.com/ixisio/grunt-ejs-locals
 *
 * Copyright (c) 2014 ixisio
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  var ejs = require('ejs-locals');

  grunt.registerMultiTask('ejs', 'compile ejs templates', function() {
    var options = this.options();

    grunt.verbose.writeflags(options, 'Options');

    this.files.forEach(function(file) {
      // Pass empty settings obj (like express)
      // https://github.com/RandomEtc/ejs-locals/issues/32
      options.settings = {};

      // Generate EJS-Locals HTML
      ejs(file.src[0], options, function(err, html) {
        if (err) {
          return grunt.fail.fatal('Err:  ' + err);
        }
        grunt.file.write(file.dest, html);
        grunt.log.ok('Wrote ' + file.dest);
      });
    })
  });
};
