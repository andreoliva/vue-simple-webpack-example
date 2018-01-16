const merge = require('webpack-merge')
const webpack = require('webpack')
const BASE_CONFIG = require('./webpack.base.config.js')

module.exports = (env = {}) => {
  return merge(BASE_CONFIG, {
    plugins: [
      new webpack.DefinePlugin({
        ENVIRONMENT: JSON.stringify('development')
      })
    ]
  })
}
