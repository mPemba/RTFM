'use strict';

var app = angular.module('rtfmApp');

app.controller('threadsCtrl', function($scope, threadsThing, $rootScope) {

	$scope.threads = threadsThing.$asArray();

	$scope.threads.$loaded().then(function(threads) {
		console.log(threads);
	})

    $scope.createThread = function(title) {
      $scope.threads.$add({
        username: $rootScope.user,
        title: title
      })
    }

	$scope.logMeOut = function() {
		envService.logOut();
		$location.path('login');
	}
});