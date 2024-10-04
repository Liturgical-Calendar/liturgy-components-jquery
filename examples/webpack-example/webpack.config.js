const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './main.js', // Adjust this to the location of your main JS file
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'), // Adjust output directory as needed
  },
  mode: 'development',
  plugins: [
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
      })
  ]
};
