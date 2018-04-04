const express = require('express');
const path = require('path');
var app = module.exports.app = exports.app = express();
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express'});
});

// hot middle webpack setup
if(env === 'development')
{
  console.log('Running in development mode');

  //webpack and webpack config delaration
  const webpack = require('webpack');
  const config = require('./webpack.config.js');
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpackMiddleware = require("webpack-dev-middleware");
  const webpackCompiler = webpack(config);
  const wpmw = webpackMiddleware(webpackCompiler,{
    noInfo: true,
    mode: env,
    writeToDisk: true,
    publicPath: config.output.publicPath
  });
  const wphmw = webpackHotMiddleware(webpackCompiler);

  // this executes webpack and caches the html and js in dist
  app.use(wpmw);
  // webpack hot
  app.use(wphmw);

  // serve static assets normally
  app.use(express.static('dist'));

  // needed for react-router
  app.get('*', (req, res, next) => {
    var filename = path.join(webpackCompiler.outputPath,'index.html');
    webpackCompiler.outputFileSystem.readFile(filename, (err, result) =>{
      if (err) {
        return next(err);
      }
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
  });
}
else
{
  // serve static assets normally
  app.use(express.static(__dirname + '/dist'));

  // needed for react-router
  app.get('*', (req, res, next) =>{
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));