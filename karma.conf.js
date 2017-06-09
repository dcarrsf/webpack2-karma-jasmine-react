var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS'/*, 'Chrome', 'Firefox'*/ ],
    singleRun: true,
    frameworks: [ 'jasmine' ],
    files: [
      'karma.webpack.js'
    ],
    preprocessors: {
      'karma.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.jsx?$/, loader: 'babel-loader' },
          { test: /\.(sass|scss)$/, loader: 'style-loader!css-loader!resolve-url-loader!sass-loader?sourceMap' }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    },
    reporters: [ 'spec' ]
  });
};
