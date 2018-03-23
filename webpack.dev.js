const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  entry: {
    main: ['webpack-hot-middleware/client?name=app', './app.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map'
});