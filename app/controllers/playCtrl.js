angular.module('ytplay').controller('playCtrl', function playCtrl($scope, $routeParams, $window, YoutubeApi) {

    YoutubeApi.getVideo($routeParams.id, function(item) {
        $scope.item = item;
    });

    $scope.back = function() {
        $window.history.back();
    }
});