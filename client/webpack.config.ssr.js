const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const ssrConfig = merge(baseConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../server/public'),
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_NODE: true
    })
  ],
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  }
});

module.exports = ssrConfig;
