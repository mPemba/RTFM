var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, $location, envService) {
    // $scope.env = envService.getEnv();
	$scope.login = function(username) {
		envService.saveUsername(username);
		// alert(username);
		$location.path('/threads');
	}

});