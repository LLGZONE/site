const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');
const path = require('path');
module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist/ssr')
  },
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  }
});
