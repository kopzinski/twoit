import uiRouter from 'angular-ui-router'
import { placesComponent } from './places.component'
import { placesFilter } from './places.filter'

export const places = angular
  .module('twoit.components.place.places', [
    uiRouter,
  ])
  .component('places', placesComponent)
  .filter('placesFilter', placesFilter)
  .config(($stateProvider) => {
    'ngInject'

    $stateProvider
      .state('places', {
        url: '/places',
        component: 'places',
        // params: {
        //   filter: {
        //     value: 'none',
        //   },
        // },
        resolve: {
          places(PlaceService) {
            'ngInject'
            return PlaceService.getAvailablePlaces()
          },
          // filter($transition$) {
          //   'ngInject'

          //   return $transition$.params()
          // },
        },
      })
  })
  .name
 