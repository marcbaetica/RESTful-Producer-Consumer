angular.module('job.controllers', [])
  .controller('jobsController', ['$scope', 'Job', function($scope, Job) {
    var limit = 20;
    $scope.loadJobs = function() {
      Job.getList({ full: true, limit: limit }).then(function(jobs) {
        $scope.jobs = jobs;
        limit += 10;
      });
    };
$scope.loadJobs();
}]);