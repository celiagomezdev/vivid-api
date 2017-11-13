const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const uuidv4 = require('uuid/v4')

const BarSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    default: ''
  },
  postalCode: {
    type: Number,
    default: 0
  },
  neighbourhood: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: uuidv4()
  },
  googlePlaceId: {
    type: String,
    default: ''
  },
  rating: {
    type: Number,
    default: 0
  },
  smokingType: {
    type: String,
    default: ''
  },
  checked: {
    type: String,
    default: ''
  },
  photos: [
    {
      type: String,
      default: ''
    }
  ],
  placeTypes: [
    {
      type: String,
      default: ''
    }
  ]
})

module.exports = mongoose.model('Bar', BarSchema)
