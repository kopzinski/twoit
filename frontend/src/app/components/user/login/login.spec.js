describe('Login', () => {
  beforeEach(() => {
    angular.mock.module('twoit.components.user.login')
  })

  describe('LoginComponentController', () => {

    let $componentController
    let controller
    let UserService

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController')
      UserService = $injector.get('UserService')

      controller = $componentController('login',
        { $scope: {}, UserService: UserService }
      )
    }))

    it('should initialize user with empty name and pass', () => {
      controller.$onInit();

      expect(controller.user).toBe(true);
      expect(controller.user.username).toEqual('');
      expect(controller.user.password).toEqual('');
    });
  })
})