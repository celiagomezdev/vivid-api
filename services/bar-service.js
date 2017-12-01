const fs = require('fs')

const BarModel = require('../models/bar-model')

function findAll() {
  return BarModel.find()
}
//Add new document avoiding duplicates
async function add(bar) {
  return BarModel.findOneAndUpdate({ placeid: bar.placeid }, bar, {
    upsert: true,
    new: true
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
  find,
  add,
  addMany,
  del
}
