const express = require('express')
const router = express.Router()
const config = require('config')

router.get('/add', async (req, res, next) => {
  res.render('add-bar-form')
})

//Form connection
router.post('/add', async (req, res, next) => {
  const input = req.body.barName
  res.render('add-bar-form', {
    input,
    GMSApiKey: config.get('GMSApiKey')
  })
})
