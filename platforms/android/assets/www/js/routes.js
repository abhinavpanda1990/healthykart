angular.module('HealthyKartApp.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('checkout', {
      url: '/checkout',
      templateUrl: 'templates/checkout.html',
      controller: 'checkoutCtrl'
    })
  
  .state('filterBy', {
      url: '/filter',
      templateUrl: 'templates/filterBy.html',
      controller: 'filterByCtrl'
    })

  .state('sortBy', {
      url: '/sort',
      templateUrl: 'templates/sortBy.html',
      controller: 'sortByCtrl'
    })

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.items', {
    url: '/items',
    views: {
      'tab-items': {
        templateUrl: 'templates/tab-items.html',
        controller: 'itemsCtrl'
      }
    }
  })

  .state('tab.cart', {
    url: '/cart',
    views: {
      'tab-cart': {
        templateUrl: 'templates/tab-cart.html',
        controller: 'cartCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/items');

});