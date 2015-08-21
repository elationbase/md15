// remap jQuery to $
(function(){
	var app = angular.module("mdApp", ["firebase"]);
	
	app.controller("SampleCtrl", function($scope, $firebaseArray) {
		var ref = new Firebase("https://eb-ang01.firebaseio.com/");

		// download the data into a local object
		$scope.data = $firebaseArray(ref);
	});

})();




