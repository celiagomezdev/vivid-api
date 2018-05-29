const BarModel = require('../models/bar-model')

function emptyBarDB() {
  BarModel.remove({}, (err, result) => {
    if (err) return err
    console.log('Bar collection removed: ' + JSON.stringify(result.result))
  })
}

module.exports = {
  emptyBarDB
}
