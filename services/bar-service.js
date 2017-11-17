const fs = require('fs')

const BarModel = require('../models/bar-model')

function findAll() {
  return BarModel.find()
}

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

//Code to save many entries at once into mongodb - from a JSON data file

function load(dataPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf8', (err, contents) => {
      if (err) return reject(err)

      resolve(JSON.parse(contents))
    })
  })
}

// function saveJSON(dataPath) {
//   load(dataPath)
//     .then(console.log(`Bars loaded`))
//     .then(loadedBars => {
//       addMany(loadedBars)
//       console.log(`${loadedBars.length} bars saved into database`)
//     })
//     .catch(function(error) {
//       console.log('Catch: ' + error.message)
//     })
// }

module.exports = {
  findAll,
  find,
  add,
  addMany,
  del,
  load
}
