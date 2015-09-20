
angular.module("shApp", [])

.controller('mainController', function ($scope) {

	$scope.selectedMethod = 'GET';


	$scope.methods = [
		{name: 'GET', method: 'get'},
		{name: 'POST', method: 'post'},
		{name: 'PUT', method: 'put'},
		{name: 'DELETE', method: 'delete'}
	];

})