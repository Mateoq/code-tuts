const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'index.js',
    publicPath: '/public/',
    path: path.join(__dirname, 'public')
  },
  watch: true,
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
