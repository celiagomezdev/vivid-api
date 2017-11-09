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
  res.send(bar)
})

app.delete('/bar/:barId', async (req, res, next) => {
  await BarService.del(req.params.barId)
  res.send(`Bar with id: ${barId} deleted from database`)
})

app.listen(3000, () => {
  console.log('Server listening.')
})
