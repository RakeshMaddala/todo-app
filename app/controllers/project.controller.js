angular.module('to-do-app').controller('ProjectController', ['$scope', '$stateParams',
  function ($scope, $stateParams) {
    $scope.projectobj = $stateParams.projectobj;
  }]);
