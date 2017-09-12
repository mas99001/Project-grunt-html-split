'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
      html_split: {
          options: {
            src: "src/",
            dest: "destination/paterns-par",
            wildcard: "**/*.html",
            handler: "<!--DS22SD-->"
          },
          files: {
            'dest/default_options': ['src/srcfile', 'src/123'],
          }
        },
      });
    grunt.registerTask('default', ['html_split']);
    grunt.loadNpmTasks('grunt-html-split');
}