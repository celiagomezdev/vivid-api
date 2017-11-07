module.exports = class Bar {
  constructor(
    name,
    neighbourhood,
    address,
    postalCode,
    location,
    placeId,
    rating,
    smokeType,
    checked,
    photos,
    placeTypes
  ) {
    this.name = name
    this.neighbourhood = neighbourhood
    this.address = address
    this.postalCode = postalCode
    this.location = location
    this.placeId = placeId
    this.rating = rating
    this.smokeType = smokeType
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
      bar.placeId,
      bar.rating,
      bar.smokeType,
      bar.checked,
      bar.photos,
      bar.placeTypes
    )
  }
}
