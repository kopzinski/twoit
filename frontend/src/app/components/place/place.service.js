export class PlaceService {
  constructor($http) {
    'ngInject'
    this.$http = $http
    this.url = 'http://localhost:3000/'
  }

  getAvailablePlaces() {
    return this.$http.get(this.url + 'places');
  }

  voteAtPlace(placeId) {
    return this.$http.post(this.url + 'places/' + placeId + '/votes');
  }

  addPlace(placeName) {
    return this.$http.post(this.url + 'places', { name: placeName });
  }

  getWinner() {
    return this.$http.get(this.url + 'winner');
  }
}
