//Script to import JSON file to mongoDB
const BarService = require('./services/bar-service')
const dataPath = `${__dirname}/database-json/bars-database.json`

BarService.load(dataPath)
  .then(loadedBars => {
    BarService.addMany(loadedBars)
  })
  .catch(function(error) {
    console.error()
    throw error
  })

//Code to save many entries at once into mongodb - from a JSON data file

function load(dataPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf8', (err, contents) => {
      if (err) return reject(err)

      resolve(JSON.parse(contents))
    })
  })
}
