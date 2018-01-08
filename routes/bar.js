const express = require('express')
const router = express.Router()

const BarService = require('../services/bar-service')

router.get('/', async (req, res, next) => {
  res.send(await BarService.findAll())
})

router.get('/detail/:id', async (req, res, next) => {
  const bar = await BarService.find(req.params.id)
  res.render('bar-detail', { bar })
})

router.get('/all', async (req, res, next) => {
  const bars = await BarService.findAll()
  res.render('bar-list', { bars })
})

router.get('/:neigbourhood', async (req, res, next) => {
  const kiez = req.params.neigbourhood
  const bars = await BarService.findAllOf(kiez)
  if (bars.length === 0) res.status(404)
  res.send(bars)
})

router.get('/all/:neigbourhood', async (req, res, next) => {
  const bars = await BarService.findAllOf(req.params.neigbourhood)
  res.render('bar-list', { bars })
})

router.get('/:id/json', async (req, res, next) => {
  const bar = await BarService.find(req.params.id)
  if (!bar) res.status(404)
  res.send(bar)
})

router.post('/', async (req, res, next) => {
  const newBar = req.body
  try {
    const bar = await BarService.add(newBar)
    res.send(bar)
  } catch (err) {
    if (err.name === 'MongoError' && err.code === 11000) {
      return res.status(500).send({
        success: false,
        message: `Bar '${newBar.name}' already exists!`
      })
    }
    return res.status(500).send({ success: false, message: err.message })
  }
})

router.post('/update', async (req, res, next) => {
  const newBar = req.body
  try {
    const bar = await BarService.update(newBar)
    res.send(bar)
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: `Update failed. Message: ${err.message}`
    })
  }
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
