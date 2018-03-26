const express = require('express');
var app = module.exports.app = exports.app = express();
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV;

//webpack and webpack config delaration
const webpack = require('webpack');
const config = require('./webpack.config.js');

const compiler = webpack(config);

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express'});
});

//hosts static content form /app folder
app.use(express.static('dist'));

// this executes webpack and caches the html and js in dist
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  mode: 'production'
  //publicPath: config.output.publicPath
}));

app.listen(port, () => console.log(`Listening on port ${port}`));