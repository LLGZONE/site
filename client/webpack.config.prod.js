const path = require('path');
const merge = require('webpack-merge')
const cleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.config.base');
module.exports = merge(baseConfig, {
  output: {
    filename: '[name]-[chunkhash:8].js',
    chunkFilename: '[name]-[chunkhash:8].js'
  },
  plugins:[
    new cleanWebpackPlugin('dist/client')
  ]
});
