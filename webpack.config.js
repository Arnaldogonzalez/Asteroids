var path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: {
    app: ["./js/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "prod.js",
    sourceMapFilename: "[file].map",
  },
  devtool: "inline-source-map",
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};
