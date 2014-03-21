angular.module('ytplay').controller('searchCtrl', function searchCtrl($scope, $routeParams, $http, YoutubeApi, $location) {
    $scope.title = "Search";
    $scope.items = [];

    $scope.search = function() {
        YoutubeApi.search($scope.query, function(result) {
            $scope.items = result;
        });
    }

    $scope.play = function(id) {
        $location.path('/play/' + id);
    }
});