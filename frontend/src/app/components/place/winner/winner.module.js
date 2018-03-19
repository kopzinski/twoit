import uiRouter from 'angular-ui-router'
import { winnerComponent } from './winner.component'

export const winner = angular
  .module('twoit.components.place.winner', [
    uiRouter,
  ])
  .component('winner', winnerComponent)
  .config(($stateProvider) => {
    'ngInject'

    $stateProvider
      .state('winner', {
        url: '/winner',
        component: 'winner',
        resolve: {
          winner(PlaceService) {
            'ngInject'
            return PlaceService.getWinner()
          },
        },
      })
  })
  .name
 