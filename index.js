const express = require('express')
const bodyParser = require('body-parser')
const BarService = require('./services/bar-service')

const app = express()

app.set('view engine', 'pug')

app.use(bodyParser.json())

app.get('/', async (req, res, next) => {
  res.render('index')
})

app.get('/bar/all', async (req, res, next) => {
  const bars = await BarService.findAll()

  res.render('bar', { bars })
})

app.post('/bar', async (req, res, next) => {
  const bar = await BarService.add(req.body)
  console.log(bar)
  res.send(bar)
})

app.listen(3000, () => {
  console.log('Server listening.')
})
