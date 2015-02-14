'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */

function AccountCtrl($scope, user) {

  //set the user information on the parent controllers scope.
  //now all child states will also have access

  $scope.title = 'Account Overview';
  $scope.user = user;
}

controllersModule.controller('AccountCtrl', AccountCtrl);
