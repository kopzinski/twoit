import angular from 'angular'
import uiRouter from 'angular-ui-router'
import { twoItComponent } from './2it.component'
import { components } from './components/components.module'

export const twoit = angular
  .module('twoit', [
    components,
    uiRouter,
  ])
  .component('twoit', twoItComponent)
  .config(  ($locationProvider, $urlRouterProvider) => {
    'ngInject'

    $locationProvider.html5Mode(true)
  })
  .name