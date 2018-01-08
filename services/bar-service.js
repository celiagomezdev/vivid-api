const fs = require('fs')

const BarModel = require('../models/bar-model')

function findAll() {
  return BarModel.find()
}

function findAllOf(neighbourhood) {
  return BarModel.find({ neighbourhood: neighbourhood })
}

async function add(bar) {
  return BarModel.create(bar)
}

async function update(bar) {
  return BarModel.findOneAndUpdate({ _id: bar._id }, bar, {
    new: true,
    upsert: true,
    setDefaultsOnInsert: true
  })
}

async function del(id) {
  return BarModel.remove({ _id: id })
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
  findAllOf,
  find,
  add,
  update,
  addMany,
  del
}
