const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  name: "app",
  plugins: [
    new HtmlWebpackPlugin({
      title: "portfolio",
      template: path.join(__dirname, "./index.html")
    }),
    new CleanWebpackPlugin(["public"])
  ],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // include: paths.appSrc,
        loader: require.resolve("babel-loader"),
        options: {
          // This is a feature of `babel-loader` for Webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          plugins: ["react-hot-loader/babel"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.(pdf|jpg|jpeg|png)$/,
        use: ["file-loader"]
      }
    ]
  }
};
