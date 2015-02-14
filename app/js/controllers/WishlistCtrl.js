'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function WishlistCtrl($scope) {

  $scope.title = 'Wishlist';

  $scope.addToBasket = function(item) {
    // TODO would be api call
    $scope.user.basket.push(item);
    console.log(item.name + ' added to basket');
  }

  $scope.removeFromWishlist = function(removeItem) {
    // TODO would be api call
    $scope.user.wishlistItems = _.filter($scope.user.wishlistItems, function(currentItem) {
      return currentItem.sku !== removeItem.sku;
    });
    console.log(removeItem.name + ' removed from wishlist');
  }

  $scope.removeAll = function() {
    // TODO would be api call
    console.log('removed all from wishlist');
    $scope.user.wishlistItems.length = 0;
  }

  $scope.addChecked = function() {
    // TODO would be api call
    $scope.user.basket = _.filter($scope.user.wishlistItems, function(item) {
      return item.selected;
    });
    console.log('add all checked to basket');
  }

  $scope.selectAll = function() {
    $scope.user.wishlistItems = _.each($scope.user.wishlistItems, function(item) {
      item.selected = $scope.user.selectAllWishlist;
    });
    console.log('add all checked to basket');
  }
}

controllersModule.controller('WishlistCtrl', WishlistCtrl);
