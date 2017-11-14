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

module.exports = {
  findAll,
  find,
  add,
  addMany,
  del
}
