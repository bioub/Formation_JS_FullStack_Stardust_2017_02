// Module IIFE (Immediately Invoked Function Expression)
// Intérêt : avoir une portée de fichier (comme dans Node.js)
(function () {
  'use strict';
  
  var module = angular.module('contact-add.controller', []);

  module.controller('ContactAddCtrl', function($scope, $http) {
    console.log('ContactAddCtrl');
  });

}());