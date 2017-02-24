// Module IIFE (Immediately Invoked Function Expression)
// Intérêt : avoir une portée de fichier (comme dans Node.js)
(function () {
  'use strict';
  
  var module = angular.module('contact-add.controller', [
    'ui.router'
  ]);

  module.controller('ContactAddCtrl', function($scope, $http, $state) {
    
    $scope.add = function() {
      $http.post('/api/contacts', $scope.contact)
        .then(function(res) {
          $state.go('contact-list');
        }); 
    };
  });

}());