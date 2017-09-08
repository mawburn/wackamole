const dev = require('./webpack.dev.config')
const prod = require('./webpack.prod.config')

const env = process.env.NODE_ENV || 'dev'
const config = (env === 'production') ? prod : dev

module.exports = {
  bail: config.bail,
  entry: config.entry,
  output: config.output,
  externals: config.externals,
  plugins: config.plugins,
  devServer: config.devServer,
  devtool: config.devtool,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      }
    ]
  }
}