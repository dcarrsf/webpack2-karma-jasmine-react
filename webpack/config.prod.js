const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../src'),
  // Entry point...
  entry: {
    app: './app.js',
    // vendor: ["angular"]
  },
  // Output endpoint (production)
  output: {
    path: path.resolve(__dirname, '../build/prod/js'),
    filename: '[name].bundle.min.js',
  },
  // Run tasks with loaders...
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },{
        // Transpile ES6
        test: /\.js$/,
        use: ['babel-loader'],
      },{
        // Transpile SASS
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader', 
          'sass-loader?sourceMap'
        ]
        // test: /\.(sass|scss)$/,
        // loader: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   loader: 'css-loader!sass-loader',
        // }),
      }, {
        // Bundle HTML partials
        test: /\.html$/,
        use: [
          'raw-loader',
        ]
      }
    ],
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin(),
    // Split angular to vendor file
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor",
    //   filename: "vendor.bundle.min.js"
    // }),
    // Extract CSS to separate file
    // new ExtractTextPlugin({
    //   filename: '[name].bundle.min.css',
    //   allChunks: true,
    // }),
    // Generate the index.html file
    new HtmlWebpackPlugin({
      title: 'Webpack build example',
      template: '../src/app.ejs',
      filename: '../index.html'
    })
  ],
  // Needed for angular-router
  node: {
    fs: "empty"
  }
};
