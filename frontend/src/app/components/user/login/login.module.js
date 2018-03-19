import uiRouter from 'angular-ui-router'
import { loginComponent } from './login.component'

export const login = angular
  .module('twoit.components.user.login', [
    uiRouter,
  ])
  .component('login', loginComponent)
  .config(($stateProvider) => {
    'ngInject'
    
    $stateProvider
      .state('login', {
        url: '/login',
        component: 'login',
        // resolve: {
        //   authenticate(UserService) {
        //     'ngInject'
        //     return UserService.authenticate()
        //   },
        // },
      })
  })
  .name
 