const app = require('./index')

const webpack = require('webpack');
const webpackConfig = require('../webpack.dev');
const compiler = webpack(webpackConfig);

// Webpack
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));