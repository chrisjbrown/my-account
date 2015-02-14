/*global angular */

'use strict';

describe('Unit: AccountService', function() {

  var service;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    // mock the service
    angular.mock.inject(function(AccountService) {
      service = AccountService;
    });
  });

  it('should exist', function() {
    expect(service).toBeDefined();
  });

});
