const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: "source-map", // Source map generation must be turned on
  plugins: [
    new HtmlWebpackPlugin(),
    sentryWebpackPlugin({
      org: "demosentry-zt",
      project: "javascript",
      authToken: "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",
      release: {
        name: "my-project-name@2.3.13",
        inject: true
      },
      telemetry: false,
      debug: true
    }),
  ],
};
