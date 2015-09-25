// Code goes here
// Example using Restangular.

angular.module('restangular-sample',
      [ 'restangular' ]).config(
      ['RestangularProvider', '$httpProvider', 
      function(RestangularProvider, $httpProvider) {
          RestangularProvider.setBaseUrl('https://api.foursquare.com/v2');
          RestangularProvider.setListTypeIsArray(false);
          
          RestangularProvider.setResponseExtractor(function(response, operation, what) {
            if (operation === 'get') {
              return response.response[what.substring(0, what.length - 1)];
            } else if (operation === 'getList') {
              return response.response[what].groups[0].items;
            }
          });
      } ]);
      
var module = angular.module('restangular-sample');

module.controller('SampleCtrl', 
[ '$scope', 'Restangular', function($scope, Restangular) {
    var params = {
      client_id: 'GY4W5CTM20CNKUYWQ0AO1FZEW3H0SMAS1EI5QEHRL3RJZVYG',
      client_secret: 'CKWHBUAKO2MQF4OTWCKLPIS4WQOZLKBRFKVP5NSVTHHWXXXH'
    };
    $scope.venueId = '40a55d80f964a52020f31ee3';
    
    $scope.venue = Restangular.one("venues", $scope.venueId).get(params);
    
    $scope.venue.then(function(result) {
      $scope.venueNoPromise = result;
      $scope.likes = $scope.venueNoPromise.getList("likes", params);
    })
    
    
} ]);

