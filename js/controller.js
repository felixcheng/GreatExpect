var dataRef = new Firebase("https://resplendent-fire-8717.firebaseio.com/shares/");
var gExControllers = angular.module('gExControllers', ['gExServices', 'firebase']);

gExControllers.controller('InputCtrl', ['$scope', '$http',
	function($scope, $http){
		$scope.empty = {};

		$scope.update = function(share){
	  	var time = new Date()
			var dataShare = new Firebase("https://resplendent-fire-8717.firebaseio.com/shares/" + time.toString());
			var goalPrice = (1+share.goal/100) * share.price;
			var stopPrice = (1-share.stopLoss/100) * share.price;
			dataShare.set({code: share.code, price: share.price, unit:share.unit, goal:goalPrice, 
				stopLoss:stopPrice, PurDate: time.toDateString()});
			$scope.share = angular.copy($scope.empty);	
		};

		$scope.reset = function(){
			$scope.share = angular.copy($scope.empty);
		};

		$scope.reset();

		$scope.go = function ( path ) {
  		$location.path( path );
		};

		// $http.OPTIONS('http://localhost:3000/session/create').success(function(data)
		// 	{ console.log(data); })

		// $http.get('http://finance.yahoo.com/webservice/v1/symbols/goog/quote?format=json').success(console.log(data));
}]);

gExControllers.controller('PortfolioCtrl', ['$scope',
	function($scope){
	  $scope.shares = [];
		dataRef.on('value', function(snapshot) {
		  var obj = snapshot.val();
		  $scope.shares = [];
			for (var key in obj){
				$scope.shares.push(obj[key]);
			}
			console.log($scope.shares);
			$scope.$apply();
		});

		// $scope.delete = function (share) {
		// 			console.log('share:',share);
		// 			for(var n in $scope.shares){
		// 				if ($scope.shares[n] == share){
		// 					delete $scope.shares[n];
		// 					// console.log(n, dataRef);
		// 					var toDel = new Firebase("https://resplendent-fire-8717.firebaseio.com" + n.toString());
		// 					console.log('to', toDel)
		// 					toDel.remove();
		// 					toDel.remove();

		// 				}
		// 			}

		$scope.delete = function (share) {
			console.log('share:',share);
			for(var n in $scope.shares){
				if ($scope.shares[n] == share){
					console.log('share:',share, $scope.shares[n]);
					delete $scope.shares[n];
					console.log('after', $scope.shares[n]);
					// console.log(n, dataRef);
					var httpStr = "https://resplendent-fire-8717.firebaseio.com/shares/" + n.toString();
					var toDel = new Firebase(httpStr);
					toDel.remove();
					toDel.remove();

				}
			}
	  };

	}
]);
