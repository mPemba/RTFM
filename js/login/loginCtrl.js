var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, $location, envService) {

	$scope.login = function(username) {
		envService.saveUsername(username);
		$location.path('/threads');
	}

});