const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const outputDir = path.resolve(__dirname, '../server/public');
const ssrConfig = merge(baseConfig, {
  output: {
    path: outputDir,
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new cleanWebpackPlugin(outputDir),
    new webpack.DefinePlugin({
      IS_NODE: true
    }),
    new ReactLoadablePlugin({
      filename: path.resolve(outputDir, 'react-loadable.json')
    })
  ],
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  }
});

module.exports = ssrConfig;
