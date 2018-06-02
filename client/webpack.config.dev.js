const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");
module.exports = merge(baseConfig, {
  output: {
    filename: '[name].js'
  },
  devServer: {
    host: "0.0.0.0",
    hot: false,
    inline: false,
    port: 4001,
    disableHostCheck: true,
    historyApiFallback: true
  }
});

