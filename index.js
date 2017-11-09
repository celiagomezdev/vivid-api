const express = require('express')
const BarService = require('./services/bar-service')

const app = express()

app.set('view engine', 'pug')

app.get('/', async (req, res, next) => {
  res.render('index')
  // res.sendFile(__dirname + '/index.html')
  // res.send(await BarService.findAll())
})

app.get('/bar/all', async (req, res, next) => {
  const bars = await BarService.findAll()

  res.render('bar', { bars })
})

app.listen(3000, () => {
  console.log('Server listening.')
})
