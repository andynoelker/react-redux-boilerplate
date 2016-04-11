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
        exclude: [
          path.resolve(__dirname, '../utils/node_modules'),
        ],
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, '../utils'),
        ],
        query: {
              plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0', 'react'],
          }
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};
