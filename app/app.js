var ifgLifeApp =  angular.module('ifgLifeApp', ['ngRoute']);

ifgLifeApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/customer360', {
            templateUrl: 'index.html',
            controller: 'IfgController'
        })
        .when('/fraud', {
            templateUrl: 'IFG - Fraud Detection.html'
        }).otherwise({
          redirectTo: '/customer360'
        })
}]);
