var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var bundles = require('../bundles.json');

var config = {
  force: true,
  baseURL: '.',
  configPath: './config.js',
  bundles: bundles.bundles
};

gulp.task('bundle', ['unbundle', 'build'], function() {
	return bundle(config, null);
});

gulp.task('unbundle', function() {
	return unbundle(config, null);
});

gulp.task('bundleAurelia', ['unbundleAurelia', 'build'], function() {
	return bundle(config, true);
});

gulp.task('unbundleAurelia', function() {
	return unbundle(config, true);
});

function bundle(config, onlyAurelia) {
	return bundler.bundle(getBundleConfig(config, onlyAurelia));
}

function unbundle(config, onlyAurelia) {
	return bundler.unbundle(getBundleConfig(config, onlyAurelia));
}

function getBundleConfig(config, onlyAurelia) {
	if(onlyAurelia == null) {
		// do nothing
	} else if (onlyAurelia) {
		delete config.bundles["dist/bundled-app"];
	} else if (onlyAurelia) {
		delete config.bundles["dist/bundled-aurelia"];
	}
	return config
}