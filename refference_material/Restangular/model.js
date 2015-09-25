angular.module('job.models', [])
  .service('Job', ['Restangular', function(Restangular) {
    var Job = Restangular.service('jobs');
 
    Restangular.extendModel('jobs', function(model) {
      model.getResult = function() {
        if (this.status == 'complete') {
          if (this.passed === null) return "Finished";
          else if (this.passed === true) return "Pass";
          else if (this.passed === false) return "Fail";
        }
        else return "Running";
      };
 
      return model;
    });
 
    return Job;
  }]);