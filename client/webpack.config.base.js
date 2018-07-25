const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
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
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      style: path.resolve(__dirname, 'style')
    }
  }
};
