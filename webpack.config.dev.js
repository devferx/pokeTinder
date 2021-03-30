const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      "@img": path.resolve(__dirname, "src/assets/img"),
    },
    extensions: [".js", ".jsx"],
  },
  mode: "development",
  devServer: {
    port: 3030,
    historyApiFallback: true,
    contentBase: path.join(__dirname, "/dist"),
    compress: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "/public/index.html",
    }),
  ],
};
