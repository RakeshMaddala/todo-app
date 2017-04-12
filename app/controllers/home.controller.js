angular.module('to-do-app').controller('HomeController', ['$scope', '$state', 'mockservice', 
  function ($scope, $state, mockservice) {
    
    $scope.mockservice = mockservice;

    $scope.showProjectProfile = function (projectdata) {
      $state.go('project', {projectobj: projectdata})
    }
}]);
