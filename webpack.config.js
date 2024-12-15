const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'liturgy-components-jquery.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'LiturgicalCalendarComponents',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  mode: 'production',
  externals: {
    jquery: 'jQuery'
  }
}
