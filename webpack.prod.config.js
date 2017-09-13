const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const packageJson = require('./package.json')

const devPort = 4242

module.exports = {
  bail: true,
  entry: './src',
  externals: '',
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: './',
    filename: 'bundle.[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html', 'filename': './index.html'}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: '',
  devServer: {}
}
