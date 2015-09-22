
var app = angular.module("shApp", []);

app.controller('mainController', function ($scope) {

	$scope.method = 'get';

	$scope.methods = [
		{name: 'GET', method: 'get'},
		{name: 'POST', method: 'post'},
		{name: 'PUT', method: 'put'},
		{name: 'DELETE', method: 'delete'}
	];

	//initial state setup
	$scope.showGet = '';
	$scope.showPost = 'ng-hide';
	$scope.showPut = 'ng-hide';
	$scope.showDelete = 'ng-hide';

	//changes show/hide attributes based on selection
	$scope.showMethod = function () {

		if ($scope.method == 'get') {
			$scope.showGet = '';
			$scope.showPost = 'ng-hide';
			$scope.showPut = 'ng-hide';
			$scope.showDelete = 'ng-hide';
		};

		if ($scope.method == 'post') {
			$scope.showGet = 'ng-hide';
			$scope.showPost = '';
			$scope.showPut = 'ng-hide';
			$scope.showDelete = 'ng-hide';
		};

		if ($scope.method == 'put') {
			$scope.showGet = 'ng-hide';
			$scope.showPost = 'ng-hide';
			$scope.showPut = '';
			$scope.showDelete = 'ng-hide';
		};

		if ($scope.method == 'delete') {
			$scope.showGet = 'ng-hide';
			$scope.showPost = 'ng-hide';
			$scope.showPut = 'ng-hide';
			$scope.showDelete = '';
			
		};

		//TODO: flush all input boxes



		/*

		$scope.data = whole response
		
			<div class="well post-info results" ng-repeat="oneElement as data">
			<p>name: '{{oneElement.name}}'</p>
			<p>city: '{{oneElement.city}}'</p>
			<p>id: '{{oneElement.id}}'</p>
		*/

	}

});