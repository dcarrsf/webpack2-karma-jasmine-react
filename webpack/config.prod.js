const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../src'),
  // Entry point...
  entry: {
    app: './main.jsx',
  },
  // Output endpoint (production)
  output: {
    path: path.resolve(__dirname, '../build/js'),
    filename: '[name].bundle.min.js',
  },
  // Add '.jsx' to the resolve.extensions array.
  resolve: {
    extensions: ['.js', '.jsx'],
    // Preact optimization
    'alias': {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  // Run tasks with loaders...
  module: {
    rules: [
      {
        // Transpile ES6/ES7/JSX
        test: /\.jsx$/,
        use: [
          'babel-loader'
        ],
      }, {
        // Transpile SASS
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }, {
        // Lint JavaScript (Airbnb Style Guide)
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [{loader: 'eslint-loader', options: {rules: {semi: 0}}}],
      }
    ],
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin(),
    // Optimize environment
    new webpack.DefinePlugin({ 
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({   
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    // Generate the index.html file
    new HtmlWebpackPlugin({
      title: 'Disney Coding Test',
      template: '../src/main.ejs',
      filename: '../index.html'
    })
  ],
};
