const fs = require('fs')

const BarModel = require('../models/bar-model')

function findAll() {
  return BarModel.find()
}
//Add new document avoiding duplicates
async function add(bar) {
  return BarModel.update({ placeid: bar.placeid }, bar, { upsert: true })
}

async function del(id) {
  return BarModel.remove({ id })
}

async function find(id) {
  return BarModel.findOne({ _id: id })
}

async function addMany(data) {
  data.forEach(add)
}

module.exports = {
  findAll,
  find,
  add,
  addMany,
  del
}
