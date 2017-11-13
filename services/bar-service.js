const fs = require('fs')

const BarModel = require('../models/bar-model')

const dbPath = `${__dirname}/../bars-database.json`

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
