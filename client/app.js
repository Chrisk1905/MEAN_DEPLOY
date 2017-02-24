var app = angular.module('nerdApp', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html'
  })
  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
