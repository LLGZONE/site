const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../server/public/buildClient')
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_NODE: false
    })
  ]
});
