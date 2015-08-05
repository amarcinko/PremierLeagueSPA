angular.module('plApp.controllers', []).
controller('plController', function($scope, getDataService) {

  //Get Data from service
  $scope.nameFilter = null;
  $scope.fixtures = [];
  $scope.page = 0;

  $scope.getFixtures = function() {
    getDataService.getFixtures().success(function(response) {
      console.log(response)
      begin = 0;
      end = 10;
      for (var i = 0; i < response.fixtures.length / 10; i++) {
        $scope.fixtures[i] = response.fixtures.slice(begin, end);
        begin += 10
        end += 10
      }
    });
  }
  $scope.getFixtures();

  $scope.nextPage = function() {
    $scope.page++;
    if ($scope.page == $scope.fixtures.length)
      $scope.page = 0;
  }

  $scope.prevPage = function() {
    $scope.page--;
    if ($scope.page == -1)
      $scope.page = $scope.fixtures.length - 1;
    console.log($scope.page)
  }

});