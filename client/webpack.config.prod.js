const merge = require('webpack-merge');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.config.browser');
module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: 'chunk.[name].[chunkhash].js'
  },
  plugins: [new cleanWebpackPlugin('dist/client')]
});
