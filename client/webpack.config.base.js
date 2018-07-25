const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const entry = require('./scripts/get_entry');
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry,
  context: __dirname,
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    publicPath: '/static/',
    filename: '[name].js',
    chunkFilename: 'chunk.[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /.(jsx?|tsx?)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.md$/,
        use: ['raw-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: 'chunk.[name].[chunkhash].css'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      style: path.resolve(__dirname, 'style')
    }
  }
};
