angular.module('plApp.services', []).
factory('getDataService', function($http) {

  var dataAPI = {};

  dataAPI.getFixtures = function() {

    $http.defaults.headers.common["X-Auth-Token"] = "4f73adc8e53746ec9b1e34423d0682d4"
    return $http.get('http://api.football-data.org/alpha/soccerseasons/398/fixtures/');
  }

  return dataAPI;
});