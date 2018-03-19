import templateUrl from './winner.html'

export const winnerComponent = {
  bindings: {
    // winner: '<',
    // filter: '<',
  },
  templateUrl,
  controller: class WinnerComponent {
    constructor($state, PlaceService) {
      'ngInject'
      this.$state = $state
      this.self = this
      this.PlaceService = PlaceService
      this.getWinner()
    }

    getWinner() {
      return this.PlaceService.getWinner()
        .then(response => {
          console.log('response', response)
          this.self.winner = response.data || {}
        })
    }

  },
}
