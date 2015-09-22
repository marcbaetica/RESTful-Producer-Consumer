
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


	};

	$scope.submit = function () {

			//for testing purposes GET all or GET one
			//info pushed into $scope.data
			$scope.dbResponse1 = {name: 'Batman', city: "Gotham", id: '54sd213czx32d1sa3cx'};
			$scope.dbResponse2 = {name: 'Superman', city: "Metropolis", id: 'd5sa31235d2d1sa3cx'};
			$scope.dbResponse3 = {name: 'The Flash', city: "Silver City", id: '3s5ad468f4as3d2s1a'};
			$scope.data = [];
			$scope.data.push(this.dbResponse1, this.dbResponse2, this.dbResponse3);
			//response code


			//for testing purposes POST one
			//tesponse code


			//for testing purposes PUT one
			//response code


			//for testing purposes DELETE one
			//response code


			value = 3; //status = OK.
			switch (value) {
				case 1:
					$scope.response = "Status: OK.";
					$scope.type = "success";
					break;
				case 2:
					$scope.response = "Status: Error. Database results could not be returned!";
					$scope.type = "danger";
					break;
				case 3:
					$scope.response = "Status: Error. Please fill out all the values in the from before submitting.";
					$scope.type = "danger";
					break;
			};

	};

});