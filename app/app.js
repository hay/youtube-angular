angular.module('ytplay', ['ngRoute']).config(
    function($routeProvider) {
        $routeProvider.when('/', {
            controller : 'searchCtrl',
            templateUrl : 'app/partials/search.html'
        }).when('/q=:q', {
            controller : 'searchCtrl',
            templateUrl : 'app/partials/search.html'
        }).when('/404', {
            controller : 'notFoundCtrl',
            templateUrl : 'app/partials/404.html'
        }).when('/play/:id', {
            controller : 'playCtrl',
            templateUrl : 'app/partials/play.html'
        }).otherwise({
            redirectTo : '/404'
        })
    }
);