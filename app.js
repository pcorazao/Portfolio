const express = require('express');
var app = module.exports.app = exports.app = express();
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express'});
});

//hosts static content form /app folder
app.use(express.static('dist'));

// hot middle webpack setup
if(env === 'development')
{
  //webpack and webpack config delaration
  const webpack = require('webpack');
  const config = require('./webpack.config.js');
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpackMiddleware = require("webpack-dev-middleware");
  const webpackCompiler = webpack(config);
  const wpmw = webpackMiddleware(webpackCompiler,{
    noInfo: true,
    mode: 'production',
    writeToDisk: true
    //publicPath: config.output.publicPath
  });
  const wphmw = webpackHotMiddleware(webpackCompiler);

  // this executes webpack and caches the html and js in dist
  app.use(wpmw);
  // webpack hot
  app.use(wphmw);
}

app.listen(port, () => console.log(`Listening on port ${port}`));