const fs = require('fs')

const BarModel = require('../models/bar-model')

const dbPath = `${__dirname}/../bars-database.json`

function findAll() {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, file) => {
      if (err) return reject(err)

      const bars = JSON.parse(file).map(BarModel.create)

      resolve(bars)
    })
  })
}

async function add(bar) {
  const allBars = await findAll()

  bar = BarModel.create(bar)
  allBars.push(bar)

  await saveAll(allBars)

  return bar
}

async function del(barId) {
  const allBars = await findAll()
  const barIndex = allBars.findIndex(bar => bar.id == barId)
  if (barIndex < 0) return

  allBars.splice(barIndex, 1)

  saveAll(allBars)
}

async function find(barId) {
  const allBars = await findAll()

  return allBars.find(bar => bar.id == barId)
}

function saveAll(bars) {
  return new Promise((resolve, reject) => {
    fs.writeFile(dbPath, JSON.stringify(bars), (err, file) => {
      if (err) return reject(err)

      resolve()
    })
  })
}

module.exports = {
  findAll,
  find,
  add,
  del
}

// function getPlaceIdFromGMSApi(barName, postalCode) {
//   return placeId
// }

// function getBarDataFromGMSApi(placeId) {
//   return GMSBarData
// }

// function createBar(GMSBarData, smokingType, checked) {
//   return bar
// }
