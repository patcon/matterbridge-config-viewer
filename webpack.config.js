var path = require('path');
var webpack = require('webpack');
var exportPath = path.resolve(__dirname, './build');

module.exports = {
  plugins: [
    new webpack.EnvironmentPlugin({
      CONFIG_URL: 'https://raw.githubusercontent.com/edgi-govdata-archiving/matterbridge-heroku/master/config/config-heroku-template.toml'
    })
  ],
  entry: './src/app.js',
  output: {
    path: exportPath,
    filename: 'bundle.js'
  }
};
