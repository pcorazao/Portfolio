const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var app = module.exports.app = exports.app = express().use(bodyParser.json());
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express'});
});


// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  
 
  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the message. entry.messaging is an array, but 
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});


// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {

  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = "ASDGJWETQDFSVDFGRGHSDFG"
    
  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
  
    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);      
    }
  }
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