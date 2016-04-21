var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebPackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: 'body'
});

module.exports = {
  // What file to feed into webpack
  entry: [
    "./app/index.js"
  ],
  // Where we want our outputted files to go
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  // What transformations we want to apply to our code
  module: {
    loaders: [
      {
        test: /\.js$/, // target any file ending in js
        exclude: /node_modules/, // except for node_modules
        loader: 'babel-loader' // apply the babel loader
      },
      {
        test: /\.css$/, // target any file ending in css
        loader: 'css-loader!style-loader' // apply the style and css loaders
      }
    ]
  },
  plugins: [
   HtmlWebPackPluginConfig
]
}
