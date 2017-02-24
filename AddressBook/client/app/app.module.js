(function() {
  'use strict';

  var module = angular.module('app.module', [
    'contact-list.controller',
    'contact-add.controller',
    'contact-show.controller',
    'contact-delete.controller',
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

    $stateProvider.state('contact-show', {
      url: '/show/:id',
      controller: 'ContactShowCtrl',
      templateUrl: 'app/contact-show/contact-show.template.html'
    });

    $stateProvider.state('contact-delete', {
      url: '/delete/:id',
      controller: 'ContactDeleteCtrl',
      templateUrl: 'app/contact-delete/contact-delete.template.html'
    });

    $urlRouterProvider.otherwise('/list');

  });

}());

