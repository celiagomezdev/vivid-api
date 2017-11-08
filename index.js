const express = require('express')
const BarService = require('./services/bar-service')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html')
  // res.send(await BarService.findAll())
})

app.listen(3000, () => {
  console.log('Server listening.')
})
