const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist') //not sure what the second parameter should be here 
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/, 
        loader: "style!css"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }

    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
  ]
};