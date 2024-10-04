const path = require('path');

module.exports = {
  entry: './src/liturgical-calendars-select.js', // Adjust this to the location of your main JS file
  output: {
    filename: 'liturgical-calendars-select.bundle.js',
    path: path.resolve(__dirname, 'dist'), // Adjust output directory as needed
    library: 'LiturgicalCalendarsSelect', // Optional, if you want to expose a global variable
    libraryTarget: 'umd'  // Universal Module Definition
  },
  mode: 'production',
  externals: {
      jquery: 'jQuery'
  }
}
