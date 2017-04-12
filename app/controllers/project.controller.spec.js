describe('Testing Project Controller function', function () {

  describe('Project Controller', function () {
    var $scope;
    var state;
    var stateParams = {}
    stateParams.projectobj = {temp: 'testing'};

    beforeEach(angular.mock.module('to-do-app'));

    beforeEach(inject(function ($rootScope, $controller, _$state_) {
      $scope = $rootScope.$new();
      state = _$state_;
      $controller('ProjectController', { $scope: $scope, $stateParams: stateParams  });
    }));

    it('should inject mock data', function () {
      expect($scope.projectobj).not.toBeUndefined();
    });    
  });
});