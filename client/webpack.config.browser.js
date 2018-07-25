const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const outputDir = path.resolve(__dirname, '../server/public/buildClient');
module.exports = merge(baseConfig, {
  output: {
    path: outputDir,
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: 'chunk.[name].[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_NODE: false
    }),
    new ReactLoadablePlugin({
      filename: path.resolve(outputDir, 'react-loadable.json')
    })
  ]
});
