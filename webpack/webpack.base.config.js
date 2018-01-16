const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    application: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../builds/')
  },
  resolve: {
    alias: {
      vuejs$: 'vue/dist/vue.esm.js',
      node_modules: path.resolve(__dirname, '../node_modules')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.vue$/,
        loader: ['vue-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'assets/'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      PLATFORM: JSON.stringify('web')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/512x512.png',
      background: '#fff',
      inject: true,
      title: 'Icon'
    }),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.NamedModulesPlugin({ clearConsole: false })
  ]
}
