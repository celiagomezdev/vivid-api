const mongoose = require('mongoose')
const config = require('config')

mongoose.Promise = global.Promise

const connectionString = process.env.DB_URL || config.get('mongoProdUrl')

mongoose.connect(connectionString, { useMongoClient: true })
