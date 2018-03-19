import { place } from './place/place.module'
import { user } from './user/user.module'

export const components = angular
  .module('twoit.components', [
    place,
    user
  ])
  .name
