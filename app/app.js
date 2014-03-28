angular.module('ytplay', ['ui.router']).config(
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('root', {
                controller : 'searchCtrl',
                url : '/',
                templateUrl : 'app/partials/search.html'
            })
            .state('search', {
                controller : 'searchCtrl',
                url : '/search/:q',
                templateUrl : 'app/partials/search.html'
            })
            .state('404', {
                url : '/404',
                templateUrl : 'app/partials/404.html'
            })
            .state('play', {
                controller : 'playCtrl',
                url : '/play/:id',
                templateUrl : 'app/partials/play.html'
            })
    }
);