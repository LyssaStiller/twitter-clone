const express = require('express');
const app = express(); //creates an instance of an express application
const port = process.env.PORT || 3000;
const chalk = require('chalk')
const volleyball = require('volleyball')

app.use(volleyball)

// app.use(function(req, res, next){
//   console.log(chalk.green('logging stuff'))
//   res.sendStatus()
//   next()
// })

app.get('/', function(req, res, next){
  res.send('Welcome to this Twitter Clone')
})

app.get('/is-anyone-out-there', function(req, res, next){
  res.send(`Maybe ...who's asking??`)
})

app.use('/special', function(req, res, next){
  console.log(chalk.green(`you've reached a special area`))
  res.status(200).send(`that it'd do pig`)
  next()
})


app.post('/modernism', function(req, res, next){
  console.log('Testing')
})

app.listen(port, () => console.log(`listening on port ${port}`))
