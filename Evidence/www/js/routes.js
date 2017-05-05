angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('menu', {
    url: '/menu1',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu2', {
    url: '/menu2',
    templateUrl: 'templates/menu2.html',
    controller: 'menu2Ctrl'
  })

  .state('menu3', {
    url: '/menu3',
    templateUrl: 'templates/menu3.html',
    controller: 'menu3Ctrl'
  })

  .state('menu4', {
    url: '/menu4',
    templateUrl: 'templates/menu4.html',
    controller: 'menu4Ctrl'
  })

  .state('total', {
    url: '/total',
    templateUrl: 'templates/total.html',
    controller: 'totalCtrl'
  })

$urlRouterProvider.otherwise('/home')

  

});