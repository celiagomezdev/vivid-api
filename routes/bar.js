const express = require('express')
const router = express.Router()

const BarService = require('../services/bar-service')

router.get('/', async (req, res, next) => {
  res.send(await BarService.findAll())
})

router.get('/all', async (req, res, next) => {
  const bars = await BarService.findAll()

  res.render('bar-list', { bars, title: 'Bar list' })
})

router.get('/add', async (req, res, next) => {
  res.render('add-bar-form', { title: 'Add bar' })
})

//Form connection
router.post('/add', async (req, res, next) => {
  let input = req.body.barName
  res.render('add-bar-form', { input: input })
  console.log(input)

  res.send(input)
})

router.get('/:id', async (req, res, next) => {
  const bar = await BarService.find(req.params.id)

  res.render('bar-detail', { bar, title: 'Bar details' })
})

router.post('/', async (req, res, next) => {
  const bar = await BarService.add(req.body)

  res.send(bar)
})

router.delete('/:id', async (req, res, next) => {
  await BarService.del(req.params.id)
  res.send(`Bar with id '${id}' deleted from the database`)
})

module.exports = router
