const fs = require('fs')

const BarModel = require('../models/bar-model')

function findAll() {
  return BarModel.find()
}

async function add(bar) {
  return BarModel.create(bar)
}

async function del(id) {
  return BarModel.remove({ id })
}

async function find(id) {
  return BarModel.findOne({ id })
}

async function addMany(data) {
  return BarModel.collection.insertMany(data)
}

function load(dataPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf8', (err, contents) => {
      if (err) return reject(err)

      resolve(JSON.parse(contents))
    })
  })
}

module.exports = {
  findAll,
  find,
  add,
  addMany,
  del,
  load
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
