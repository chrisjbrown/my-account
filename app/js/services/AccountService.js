'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */

 // fake service that returns a promise
function AccountService($q, $http) {

  var service = {};

  service.get = function() {
    var deferred = $q.defer();

    $http.get('/user').success(function(data) {
        deferred.resolve(data);
    }).error(function(err, status) {
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  service.update = function() {
    var deferred = $q.defer();

    $http.post('/update').success(function(data) {
        deferred.resolve(data);
    }).error(function(err, status) {
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  return service;

}

servicesModule.service('AccountService', AccountService);
