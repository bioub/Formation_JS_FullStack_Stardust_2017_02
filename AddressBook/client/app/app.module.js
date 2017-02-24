(function() {
  'use strict';

  var module = angular.module('app.module', [
    'contact-list.controller',
    'contact-add.controller',
    'ui.router'
  ]);

  module.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('contact-add', {
      url: '/add',
      controller: 'ContactAddCtrl',
      templateUrl: 'app/contact-add/contact-add.template.html'
    });

    $stateProvider.state('contact-list', {
      url: '/list',
      controller: 'ContactListCtrl',
      templateUrl: 'app/contact-list/contact-list.template.html'
    });

    $urlRouterProvider.otherwise('/list');

  });

}());

