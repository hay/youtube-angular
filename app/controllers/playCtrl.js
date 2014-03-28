angular.module('ytplay').controller('playCtrl', function playCtrl($scope, $stateParams, $window, YoutubeApi) {

    YoutubeApi.getVideo($stateParams.id, function(item) {
        $scope.item = item;
    });

    $scope.back = function() {
        $window.history.back();
    }
});