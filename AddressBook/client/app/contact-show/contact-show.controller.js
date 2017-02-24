// Module IIFE (Immediately Invoked Function Expression)
// Intérêt : avoir une portée de fichier (comme dans Node.js)
(function () {
  'use strict';
  
  var module = angular.module('contact-show.controller', []);

  module.controller('ContactShowCtrl', function($scope, $http, $state) {
    $http.get('/api/contacts/' + $state.params.id)
      .then(function(res) {
        $scope.contact = res.data;
      });
  });

}());