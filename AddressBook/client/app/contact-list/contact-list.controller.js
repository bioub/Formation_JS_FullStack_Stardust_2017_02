// Module IIFE (Immediately Invoked Function Expression)
// Intérêt : avoir une portée de fichier (comme dans Node.js)
(function () {
  'use strict';
  
  var module = angular.module('contact-list.controller', []);

  module.controller('ContactListCtrl', function($scope, $http) {
    $http.get('/api/contacts')
      .then(function(res) {
        $scope.contacts = res.data;
      });
  });

}());