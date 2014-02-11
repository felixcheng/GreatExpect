 var dataRef = new Firebase("https://resplendent-fire-8717.firebaseio.com");
var gExControllers = angular.module('gExControllers', ['gExServices']);

gExControllers.controller('InputCtrl', ['$scope', 
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

gExControllers.controller('PortfolioCtrl', ['$scope',
	function($scope){
	  $scope.shares = {};
		var tempArr = []
		dataRef.on('value', function(snapshot) {
		  tempArr.push(snapshot.val());
			for (var n in tempArr[0]){
				$scope.shares[n] = tempArr[0][n];
			}
			$scope.$apply();
		});

	}
]);
