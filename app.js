const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
var app = module.exports.app = exports.app = express().use(bodyParser.json());
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV;
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express'});
});


// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  
 
  let body = req.body;
  console.log('webhook');
  console.log(body);

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      console.log(entry);

      if(entry.messaging && entry.messaging.length > 0)
      {
        // Gets the message. entry.messaging is an array, but 
        // will only ever contain one message, so we get index 0
        let webhook_event = entry.messaging[0];
        console.log(webhook_event);

        // Get the sender PSID
        let sender_psid = webhook_event.sender.id;
        console.log('Sender PSID: ' + sender_psid);

        // Check if the event is a message or postback and
        // pass the event to the appropriate handler function
        if (webhook_event.message) {
          handleMessage(sender_psid, webhook_event.message);        
        } else if (webhook_event.postback) {
          handlePostback(sender_psid, webhook_event.postback);
        }
      }

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

// Handles messages events
function handleMessage(sender_psid, received_message) {
  let response;

  console.log('handleMessage');
  console.log(received_message);

  // Check if the message contains text
  if (received_message.text) {    

    // Create the payload for a basic text message
    response = {
      "text": `You sent the message: "${received_message.text}". Now send me an image!`
    }
  } else if (received_message.attachments) {
  
    // Gets the URL of the message attachment
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "Is this the right picture?",
            "subtitle": "Tap a button to answer.",
            "image_url": attachment_url,
            "buttons": [
              {
                "type": "postback",
                "title": "Yes!",
                "payload": "yes",
              },
              {
                "type": "postback",
                "title": "No!",
                "payload": "no",
              }
            ],
          }]
        }
      }
    }
  }   
  
  // Sends the response message
  callSendAPI(sender_psid, response); 
}

// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {
  let response;
  
  console.log('handlePostback');
  console.log(received_postback);

  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  if (payload === 'yes') {
    response = { "text": "Thanks!" }
  } else if (payload === 'no') {
    response = { "text": "Oops, try sending another image." }
  }
  // Send the message to acknowledge the postback
  callSendAPI(sender_psid, response);
}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {

   // Construct the message body
   let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }

   // Send the HTTP request to the Messenger Platform
   request({
    "uri": "https://graph.facebook.com/v2.12/me/messages",
    "qs": { "access_token": PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!')
    } else {
      console.error("Unable to send message:" + err);
    }
  }); 
  
}


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