const express = require('express')
const BarService = require('./services/bar-service')

const app = express()

app.get('/', async (req, res, next) => {
  res.send(await BarService.findAll())
})

app.listen(3000, () => {
  console.log('Server listening.')
})
