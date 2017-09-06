const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const packageJson = require('./package.json')

const devPort = 4242

module.exports = {
  bail: false,
  entry: [
    `webpack-dev-server/client?http://localhost:${devPort}`,
    'webpack/hot/only-dev-server',
    './src'
  ],
  externals: '',
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    port: devPort,
    historyApiFallback: true,
    hot: true,
    inline: true,
  }
}