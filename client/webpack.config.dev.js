const baseConfig = require('./webpack.config.browser');
const merge = require('webpack-merge');
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    hot: false,
    inline: false,
    port: 4001,
    disableHostCheck: true
  }
});
