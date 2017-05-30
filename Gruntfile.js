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
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
};
