const mongoose = require('mongoose')
const config = require('config')

mongoose.Promise = global.Promise

<<<<<<< HEAD
const connectionString = process.env.DB_URL || config.get('mongoProdUrl')

mongoose.connect(connectionString, { useMongoClient: true })
||||||| merged common ancestors
mongoose.connect(config.get('mongoProdUrl'), { useMongoClient: true })
=======
mongoose.connect(config.get('mongoDevUrl'), { useMongoClient: true })
>>>>>>> master
