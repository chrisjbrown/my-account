'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function EditCtrl($scope, AccountService) {

  $scope.title = 'Account Edit';

  // copy the account data we have for the form model
  $scope.accountForm = angular.copy($scope.user);

  //regex to test address against
  $scope.dutchAddress = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;

  $scope.saveAccountData = function() {

    // TODO more client side validation
    if($scope.editForm.$invalid) {
      console.log('form invalid');
      return;
    }

    AccountService.update().then(function(data) {
      //should be api call to update account info on server
      //for now just extend old user data with new if form is valid
      angular.extend($scope.user, $scope.accountForm);
      console.log('user data saved success');
    }, function(err) {
      console.log('Error updating user info: ' + err);
    });
  }

}

controllersModule.controller('EditCtrl', EditCtrl);
