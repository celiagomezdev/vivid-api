const fs = require('fs')

const BarModel = require('../models/bar-model')

function findAll() {
  return BarModel.find()
}

async function add(bar) {
  return BarModel.create(bar)
}

async function update(bar) {
  return BarModel.findOneAndUpdate({ placeId: bar.placeId }, bar, {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true
  })
}

async function del(id) {
  const returnedBar = BarModel.remove({ _id: id })
  return returnedBar
}

async function find(id) {
  return BarModel.findOne({ _id: id })
}

async function addMany(data) {
  data.forEach(add)
  return data
}

module.exports = {
  findAll,
  find,
  add,
  addMany,
  del
}
