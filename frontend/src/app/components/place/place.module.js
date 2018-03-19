import { PlaceService } from './place.service';
import { places } from './places/places.module';
import { winner } from './winner/winner.module';

export const place = angular
  .module('twoit.components.place', [
    places,
    winner
  ])
  .service('PlaceService', PlaceService)
  .name;
