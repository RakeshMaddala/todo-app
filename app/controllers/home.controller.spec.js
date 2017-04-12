describe('Testing Home Controller function', function () {

  describe('Home Controller', function () {
    var $scope;
    var state;

    beforeEach(angular.mock.module('to-do-app'));

    beforeEach(inject(function ($rootScope, $controller, _$state_) {
      $scope = $rootScope.$new();
      state = _$state_;
      $controller('HomeController', { $scope: $scope });
    }));

    it('should inject mock data', function () {
      expect($scope.mockservice).not.toBeUndefined();
    });

    it('should inject mock data', function () {
      expect($scope.mockservice.length).toBe(6);
    });

    it('should redirect to project page on click of project', function () {
      let projectdata = {
        projectName: 'Data Analytics',
        projectstatus: 'Done',
        projectinformation: {
          description: 'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum',
          duration: '4 months',
          teammembers: 'Suresh, Rakesh, Nagesh'
        },
        serialnumber: '1111039'
      }
      spyOn(state, 'go').and.callFake(function (stateName, stateParamObj) {
        expect(stateName).toEqual('project');
        expect(stateParamObj.projectobj).toBeDefined();
      });
      $scope.showProjectProfile(projectdata);
    });
  });
});