angular.module('ytplay').controller('searchCtrl', function searchCtrl($scope, $routeParams, $http, YoutubeApi, $location) {
    $scope.title = "Search";
    $scope.items = [];

    if ($routeParams.q) {
        search($routeParams.q);
    }

    function search(q) {
        YoutubeApi.search(q, function(result) {
            $scope.items = result;
            $location.path('/q=' + q);
        });
    }

    $scope.search = function() {
        search( $scope.query );
    }

    $scope.play = function(id) {
        $location.path('/play/' + id);
    }
});