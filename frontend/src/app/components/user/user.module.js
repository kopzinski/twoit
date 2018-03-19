import { UserService } from './user.service';
import { login } from './login/login.module';

export const user = angular
  .module('twoit.components.user', [
    login,
  ])
  .service('UserService', UserService)
  .name;
