/**
 * Created by uatxy990129 on 2016/12/15.
 */

var scotchApp = angular.module('scotchApp',['ngRoute']);
scotchApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            controller: 'mainController',
            templateUrl: 'page/city.html'
        });
}]);
// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope, $http) {
    $http.get("json/hot.json")
        .success(function (response) {
            $scope.hotCities = response.sites;
        });
    $http.get("json/group.json")
        .success(function(response) {
            $scope.cities = response;
        });
});