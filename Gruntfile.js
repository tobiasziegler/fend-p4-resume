module.exports = function(grunt) {
	// Reminder - run 'npm install' to install packages before first use

	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'js/**/*.js',
				// Don't lint the jQuery library
				'!js/jQuery.js'
			]
		},
		jsbeautifier: {
			files: [
				'Gruntfile.js',
				'js/**/*.js',
				'!js/jQuery.js',
				'css/**/*.css',
				'*.html'
			],
			options: {
				js: {
					indentWithTabs: true
				},
				css: {
					indentWithTabs: true
				},
				html: {
					indentWithTabs: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jsbeautifier');

	grunt.registerTask('default', ['jshint', 'jsbeautifier']);
};
