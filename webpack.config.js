const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isEnvProduction = process.env.NODE_ENV === "production" ? true : false;

module.exports = {
  // webpack optimization mode
  mode: isEnvProduction ? "production" : "development",
  // entry files
  entry: "./src/index.tsx",
  // output files
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build/[name].js",
  },
  // module/loaders configuration
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  // resolve files configuration
  resolve: {
    // file extensions
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  // development server configuration
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  // generate source map
  devtool: isEnvProduction ? false : "source-map",
  plugins: [
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: "./public/index.html",
        },
        isEnvProduction
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          : undefined
      )
    ),
    new ReactRefreshWebpackPlugin(),
  ],
};
