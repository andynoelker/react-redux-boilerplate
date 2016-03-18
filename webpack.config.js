const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    react_redux_boilerplate: './src/index.js',
  },
  output: {
    path: '../bundle',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        //exclude: /(node_modules|bower_components)/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        query: {
              plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0', 'react'],
          }
      }
    ]
  },
};
