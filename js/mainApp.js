

var gExApp = angular.module('gExApp', ['ngRoute', 'ngResource' 'GExControllers']);

gExApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.
			when('/index', {
				templateUrl: 'partials/home.html',
				controller: 'InputCtrl'
			}).
			when('/portfo', {
				templateUrl: 'partials/portfolio.html',
				controller: 'PortfolioCtrl'
			}).
			otherwise({
				redirectTo: '/index'
			})
}])
