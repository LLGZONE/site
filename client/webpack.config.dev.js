const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');
const webpack = require('webpack');
module.exports = merge(baseConfig, {
  output: {
    filename: '[name].js'
  },
  devtool: 'source-map',
  devServer: {
    port: 4001,
    disableHostCheck: true,
    historyApiFallback: true
  },
  plugins: [new webpack.NamedModulesPlugin()]
});
