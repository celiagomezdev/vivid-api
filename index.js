const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

require('./database-connection.js')

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.set('view engine', 'pug')

const bar = require('./routes/bar')

app.use('/bar', bar)

app.get('/', async (req, res, next) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Server listening.')
})

const assert = require('assert')

const BarService = require('./services/bar-service')
const BarModel = require('./models/bar-model')

//Import JSON data into mongoDB
const dataPath = `${__dirname}/database-json/bars-database.json`

BarService.load(dataPath)
  .then(console.log(`Bars loaded`))
  .then(loadedBars => {
    BarService.addMany(loadedBars)
    console.log(`${loadedBars.length} bars saved into database`)
  })
  .catch(function(error) {
    console.log('Catch: ' + error.message)
  })
