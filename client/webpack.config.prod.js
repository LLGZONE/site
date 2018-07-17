const merge = require('webpack-merge');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.config.browser');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: '[name]-[chunkhash:8].js',
    chunkFilename: '[name]-[chunkhash:8].js'
  },
  plugins: [
    new cleanWebpackPlugin('dist/client'),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
});
