const fs = require('fs')

const BarModel = require('../models/bar-model')

function findAll() {
  return BarModel.find()
}

async function add(bar) {
  return BarModel.collection.save(bar, { upsert: true })
}

async function del(id) {
  return BarModel.remove({ id })
}

async function find(id) {
  return BarModel.findOne({ id })
}

async function addMany(data) {
  return BarModel.collection.insertMany(data, { upsert: true })
}

//Load JSON data

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
