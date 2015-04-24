'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  // account is base state, abstract (can't be navigated to).
  // loads the account info from server
  // before other states are loaded.
  // other states are child states that inherit user account
  $stateProvider
  .state('account', {
    url: '/',
    abstract: true,
    resolve: {
      user: ['AccountService', function accountResolver(AccountService) {
        return AccountService.get();
      }]
    },
    controller: 'AccountCtrl',
    templateUrl: 'home.html'
  })
  .state('account.overview', {
    url: 'overview',
    views: {
      '': {
        templateUrl: 'overview.html'
      },
      'sidebar': {
        templateUrl: 'partials/sidebar.html'
      }
    }
  })
  .state('account.edit', {
    url: 'edit',
    views: {
      '': {
        templateUrl: 'account-edit.html',
        controller: 'EditCtrl'
      },
      'sidebar': {
        templateUrl: 'partials/sidebar.html'
      }
    }
  })
  .state('account.wishlist', {
    url: 'wishlist',
    views: {
      '': {
        templateUrl: 'wishlist.html',
        controller: 'WishlistCtrl'
      },
      'sidebar': {
        templateUrl: 'partials/sidebar.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/overview');

}

module.exports = Routes;
