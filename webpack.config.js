const webpack = require("webpack");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const express = require("express");
const path = require("path");
const fs = require("fs");

let https;
if (fs.existsSync("./localhost-key.pem") && fs.existsSync("./localhost.pem")) {
  https = {
    key: fs.readFileSync("./localhost-key.pem"),
    cert: fs.readFileSync("./localhost.pem"),
    ca: fs.readFileSync("./localhost.pem"),
  };
}
module.exports = (env) => ({
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  devServer: {
    port: 9300,
    before(app) {
      app.use("/mmo", express.static(path.resolve("src/mmo")));
    },
    http2: true,
    https,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      "process.env.PRODUCTION": JSON.stringify(process.env.PRODUCTION),
      "process.env.BACKEND_URL": JSON.stringify(
        env !== "development" ? env : ""
      ),
    }),
    new CopyPlugin({
      patterns: [{ from: "./src/mmo/assets", to: "./mmo/assets" }],
    }),
  ],
  output: {
    publicPath: "/",
    filename: "game-bundle.js",
  },
  optimization: {
    minimizer: [new TerserWebpackPlugin({})],
  },
});
