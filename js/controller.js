var GExControllers = angular.module('GExControllers', []);

GExControllers.controller('InputCtrl', ['$scope', 
	function($scope){
		$scope.empty = {};

		// // $scope.update = function(share){

		// // };

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
