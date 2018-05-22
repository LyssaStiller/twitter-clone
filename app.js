const express = require('express');
const app = express(); //creates an instance of an express application
const port = process.env.PORT || 3000;
const chalk = require('chalk')
const volleyball = require('volleyball')
const nunjucks = require('nunjucks')
const routes = require('./routes')

app.use(volleyball)

app.use('/', routes)

// app.use(function(req, res, next){
//   console.log(chalk.green('logging stuff'))
//   res.sendStatus()
//   next()
// })

//INITIAL PART OF THE WORKSHOP, MOVED ROUTES TO DIFF MODULE
// app.get('/', function(req, res, next) {
//   res.render( 'index', {title: 'Hall of Fame', people: people} );
// })


// app.get('/', function(req, res, next){
//   res.send('Welcome to this Twitter Clone')
// })

// app.get('/is-anyone-out-there', function(req, res, next){
//   res.send(`Maybe ...who's asking??`)
// })

// app.use('/special', function(req, res, next){
//   console.log(chalk.green(`you've reached a special area`))
//   res.status(200).send(`that it'd do pig`)
//   next()
// })


// app.post('/modernism', function(req, res, next){
//   console.log('Testing')
// })

app.listen(port, () => console.log(`listening on port ${port}`))

var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
  ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
  console.log(output);
});


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

// app.use('/static', express.static(path.join(__dirname, 'public')))

