const uuidv4 = require('uuid/v4')

module.exports = class Bar {
  constructor(
    name,
    address,
    neighbourhood = '',
    postalCode = 0,
    location = '',
    id = uuidv4(),
    googlePlaceId = '',
    rating = 0,
    smokingType = '',
    checked = '',
    photos = [],
    placeTypes = []
  ) {
    this.name = name
    this.address = address
    this.neighbourhood = neighbourhood
    this.postalCode = postalCode
    this.location = location
    this.id = id
    this.googlePlaceId = googlePlaceId
    this.rating = rating
    this.smokingType = smokingType
    this.checked = checked
    this.photos = photos
    this.placeTypes = placeTypes
  }

  static create(bar) {
    return new Bar(
      bar.name,
      bar.address,
      bar.neighbourhood,
      bar.postalCode,
      bar.location,
      bar.id,
      bar.googlePlaceId,
      bar.rating,
      bar.smokingType,
      bar.checked,
      bar.photos,
      bar.placeTypes
    )
  }
}
