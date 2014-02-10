 var dataRef = new Firebase("https://resplendent-fire-8717.firebaseio.com");
var GExControllers = angular.module('GExControllers', []);

GExControllers.controller('InputCtrl', ['$scope', 
	function($scope){
		$scope.empty = {};

		$scope.update = function(share){

			var goalPrice = (1+share.goal/100) * share.price;
			var stopPrice = (1-share.stopLoss/100) * share.price;
			dataRef.push({code: share.code, price: share.price, unit:share.unit, goal:goalPrice, stopLoss:stopPrice});
		};

		$scope.reset = function(){
			$scope.share = angular.copy($scope.empty);
		};

		$scope.reset();

		$scope.go = function ( path ) {
  		$location.path( path );
};
}]);

GExControllers.controller('PortfolioCtrl', ['$scope', 
	function($scope){
		
}]);
