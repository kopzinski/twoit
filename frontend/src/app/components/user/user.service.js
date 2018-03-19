export class UserService {
  constructor($http) {
    'ngInject'
    this.$http = $http
    this.url = 'http://localhost:3000/'

    this.saveUserAndToken = (user, token) => {
      console.log('saving user data', user, token)
      this.$http.defaults.headers.common.Authorization = 'JWT ' + token;
    }
  }
  authenticate( username, password ) {
    const userData = {
      name: username,
      password: password
    }

    return this.$http.post(this.url + 'login', userData)
      .then(response => {
        console.log('response', response)
        this.saveUserAndToken(userData, response.data.token)
      }, errorResponse => {
        console.log(errorResponse)
        throw errorResponse
      });

  }
}
