const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next){
  let tweets = tweetBank.list();
  res.render('index', {tweets: tweets, showForm: true})
})

router.get('/users/:name', function(req, res, next){
  let name = req.params.name
  let list = tweetBank.find({name: name})
  res.render('index', {list: list})
})

router.get('/tweets/:id', function(req, res, next){
  let id = Number(req.params.id)
  var tweet = tweetBank.find({id: id})
  res.render('index', {tweet: tweet} )
})

router.post('/tweets', function(req, res, next){
  let name = req.body.name;
  let text = req.body.text;
  let newTweet = tweetBank.add(name, text);
  res.redirect('/')
})


  // // replaced this hard-coded route with general static routing in app.js
  // router.get('/stylesheets/style.css', function(req, res, next){
  //   res.sendFile('/stylesheets/style.css', { root: __dirname + '/../public/' });
  // });

/*NOTES
This is another use for the Express module: it can create a router entity that is configurable outside of any application instance. Think of router as a box for routes; a 'mini-application' capable of only performing middleware and routing functions. All the app.VERB functions can instead be written as router.VERB (docs). We export this router so that app.js can use it as a middleware handler for all / routes and subroutes. In other words, we tell app.js "here, use this box full of routes that we made in a separate file."
*/
module.exports = router;
