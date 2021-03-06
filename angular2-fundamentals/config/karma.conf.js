const webpackConfig = require('./webpack.test');

module.exports = function (config) {
    const _config = {
	basePath: '',
	frameworks: ['jasmine'],
	files: [
	    { pattern: './config/karma-test-shim.js', watched: false }
	],
	preprocessors: {
	    './config/karma-test-shim.js': ['webpack', 'sourcemap']
	},
	webpack: webpackConfig,
	webpackMiddleware: {
	    stats: 'errors-only'
	},
	webpackServer: {
	    noInfo: true
	},
	reporters: ['progress'],
	port: 9876,
	colors: true,
	logLevel: config.LOG_INFOm
	autoWatch: false,
	browsers: ['PhantomJS'],
	singleRun: true
    };

    config.set(_config);
};

