
var app = angular.module("shApp", []);

app.controller('mainController', ['$scope', '$http', function ($scope, $http) {   //Passing $http service to controller as string so that will resolve at runtime.

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

		//TO DO: flush all input boxes


	};

	$scope.submit = function () {
			
			var statusResponse;	//for status message after request is processed
			
			//IF GET
			if ($scope.method = 'get') {
				//GET all or GET one -> info pushed into $scope.data
				if ($scope.getID === undefined) {	//get all
					$http.get('http://localhost:8000/api/superheroes').then(
						function (data) {
							//console.log(data);
							statusResponse = 1;	///////////////TO DO!!!
							$scope.data = data.data;
							console.log('Returned data was:');
							console.log($scope.data);
						}, function (response) {
							statusResponse = 2;	///////////////TO DO!!!
						}
					);
				} else {	//get one (with specified ID)
					$http.get('http://localhost:8000/api/superheroes/' + $scope.getID).then(
						function (data) {
							//console.log(data);
							statusResponse = 1;	///////////////TO DO!!!
							$scope.data = []; //defining as empty aray and pushing individual object to avoid ng-repeat break
							$scope.data.push(data.data);
							console.log('Returned data was:');
							console.log($scope.data);
						}, function (response) {
							statusResponse = 4;	///////////////TO DO!!!
						}
					);
				};
			};


			//if POST
			//POST one
			


			//response code


			//for testing purposes PUT one
			//response code


			//for testing purposes DELETE one
			//response code


			//value = 1; //status = OK.
			switch (statusResponse) {
				case 1:
					$scope.response = "Status: OK.";
					$scope.type = "success";
					break;
				case 2:
					$scope.response = "Status: Error. Database results could not be returned!";
					$scope.type = "danger";
					break;
				case 3:
					$scope.response = "Status: Error. Please fill out all the form values before submitting.";
					$scope.type = "danger";
					break;
				case 4:
					$scope.response = "Status: Error. Please fill form with an accurate ID field and resubmit.";
					$scope.type = "danger";
					break;
			};

	};

}]);