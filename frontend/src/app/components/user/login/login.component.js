import templateUrl from './login.html'

export const loginComponent = {
  templateUrl,
  controller: class LoginComponent {
    constructor($state, UserService) {
      'ngInject'

      this.$state = $state
      this.UserService = UserService
      this.user = {
        username: '',
        password: ''
      }
      this.errorMessage = ''

    }
    authenticate() {
      this.UserService.authenticate(this.user.username, this.user.password)
      .then(successResponse => {
        this.$state.go('places')
      }).catch(errorResponse => {
        console.log(errorResponse)
      })
    }


  },
}
