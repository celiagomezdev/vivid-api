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

//Temporary code to import JSON data into mongoDB
const BarService = require('./services/bar-service')
const dataPath = `${__dirname}/database-json/bars-database.json`

BarService.saveJSON(dataPath)
