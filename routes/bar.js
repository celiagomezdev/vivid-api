const express = require('express')
const router = express.Router()

const BarService = require('../services/bar-service')

router.get('/', async (req, res, next) => {
  res.send(await BarService.findAll())
})

router.get('/all', async (req, res, next) => {
  const bars = await BarService.findAll()
  res.render('bar-list', { bars })
})

router.get('/:id', async (req, res, next) => {
  const bar = await BarService.find(req.params.id)

  res.render('bar-detail', { bar })
})

router.get('/:id/json', async (req, res, next) => {
  const bar = await BarService.find(req.params.id)
  if (!bar) res.status(404)
  res.send(bar)
})

router.post('/', async (req, res, next) => {
  const newBar = req.body

  if (newBar === null) {
    return res.status(400).send('The input was empty')
  }

  if (typeof newBar !== 'object') {
    return res.status(400).send('An Object was expected')
  }

  const bar = await BarService.add(newBar)
  return res.send(bar)
})

router.post('/add-many', async (req, res, next) => {
  const barArray = await BarService.addMany(req.body)
  res.send(barArray)
})

router.delete('/:id', async (req, res, next) => {
  await BarService.del(req.params.id)

  res.send(`Bar deleted from the database`)
})

module.exports = router
