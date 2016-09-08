const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'index.js',
    publicPath: '/public/',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  devServer: {
    inline: true,
    port: 3001,
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
};
