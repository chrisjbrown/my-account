'use strict';

var angular = require('angular');

module.exports = angular.module('app.controllers', []);

// Define the list of controllers here
require('./AccountCtrl.js');
require('./EditCtrl.js');
require('./WishlistCtrl.js');
