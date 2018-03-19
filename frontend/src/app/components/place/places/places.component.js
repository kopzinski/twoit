import templateUrl from './places.html'

export const placesComponent = {
  bindings: {
    // places: '<',
    // filter: '<',
  },
  templateUrl,
  controller: class PlacesComponent {
    constructor($state, PlaceService) {
      'ngInject'
      this.$state = $state
      this.self = this
      this.PlaceService = PlaceService
      this.newPlaceName = ''
      this.populatePlaces()
    }
    vote(placeId) {
      this.PlaceService.voteAtPlace(placeId)
        .then(response => {
          console.log('response', response)
          this.$state.go('winner')
        }).catch(err => {
          console.log('err', err)
          this.errorMessage = err.data.error
        })
    }

    add() {
      this.PlaceService.addPlace(this.newPlaceName)
        .then(response => {
          console.log('response', response)
          this.$state.go('winner')
        }).catch(err => {
          console.log('err', err)
          this.errorMessage = err.data.error
        })
    }

    populatePlaces() {
      return this.PlaceService.getAvailablePlaces()
        .then(response => {
          this.self.places = response.data || []
        })
    }

  },
}
