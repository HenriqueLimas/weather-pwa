var gulp = require('gulp');
var swPrecache = require('sw-precache')

gulp.task('generate-sw', function () {
  var swOptions = {
    staticFileGlobs: [
      './*.html',
      './images/*.{png,svg,gif,jpg}',
      './scripts/**/*.js',
      './styles/**/*.css'
    ],
    stripPrefix: '.',
    runtimeCaching: [{
      urlPattern: /https:\/\/publicdata-weather\.firebaseio\.com/,
      handler: 'networkFirst',
      options: {
        cache: {
          name: 'weatherData-v1'
        }
      }
    }]
  };

  return swPrecache.write('service-worker.js', swOptions);
});
