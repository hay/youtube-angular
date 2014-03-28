angular.module('ytplay').controller('searchCtrl', function searchCtrl($scope, $state, $stateParams, $http, YoutubeApi) {
    $scope.title = "Search";
    $scope.items = [];

    if ($stateParams.q) {
        search($stateParams.q);
    }

    function search(q) {
        console.log('Search', q);
        YoutubeApi.search(q, function(result) {
            $scope.items = result;
        });
    }

    $scope.search = function() {
        $state.go('search', { q : $scope.query });
    }

    $scope.play = function(id) {
        $state.go('play', { id : id });
    }
});