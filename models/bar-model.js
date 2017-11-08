module.exports = class Bar {
  constructor(
    name,
    neighbourhood,
    address,
    postalCode,
    location,
    id,
    googlePlaceId,
    rating,
    smokingType,
    checked,
    photos,
    placeTypes
  ) {
    this.name = name
    this.neighbourhood = neighbourhood
    this.address = address
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
      bar.neighbourhood,
      bar.address,
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
