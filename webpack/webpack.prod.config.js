const merge = require('webpack-merge')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BASE_CONFIG = require('./webpack.base.config.js')

module.exports = (env = {}) => {
  return merge(BASE_CONFIG, {
    plugins: [
      new UglifyJsPlugin({ sourceMap: true }),
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: '"production"' },
        ENVIRONMENT: JSON.stringify('production')
      })
    ]
  })
}
