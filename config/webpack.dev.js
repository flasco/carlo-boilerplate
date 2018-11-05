const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge.smart(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    './src/renderer/main.js',
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: [
              [
                require.resolve('babel-plugin-zent'),
                {
                  automaticStyleImport: true
                }
              ],
              'react-hot-loader/babel'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    path: path.join(__dirname, '../static/dist'),
    filename: 'js/bundle.js',
    publicPath: 'http://localhost:8207/'
  },
});
