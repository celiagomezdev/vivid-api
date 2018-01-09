//Script to import JSON file to mongoDB
require('../database-connection')

const dataPath = `${__dirname}/../database-json/updated-bars-database.json`
const BarService = require('../services/bar-service')
const fs = require('fs')

const load = async dataPath => {
  return new Promise((resolve, reject) => {
    return fs.readFile(dataPath, 'utf8', (err, contents) => {
      if (err) return reject(err)
      resolve(JSON.parse(contents))
    })
  })
}

const saveBars = async () => {
  const loadedBars = await load(dataPath)
  BarService.addMany(loadedBars)
}

saveBars()
  .then(() => console.log('bars sent'))
  .then(() => process.exit(0))
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
