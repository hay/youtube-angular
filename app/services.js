angular.module('ytplay').factory('YoutubeApi', function($http, $sce) {
    var API_ENDPOINT = "http://gdata.youtube.com/feeds/api/videos";

    function transformItem(entry) {
        var id = entry.id.$t.replace(API_ENDPOINT, "");

        return {
            "title" : entry.title.$t,
            "description" : entry.content.$t,
            "embed" :  $sce.trustAsResourceUrl("//www.youtube.com/embed/" + id + "?rel=0"),
            "id" : id,
            "thumb" : entry.media$group.media$thumbnail[0].url
        };
    }

    function getVideo(id, cb) {
        var req = $http({
            url : API_ENDPOINT + "/" + id,
            method : "GET",
            params : {
                'alt' : 'json'
            }
        });

        req.success(function(data) {
            cb(transformItem(data.entry));
        });
    }

    function search(q, cb) {
        var req = $http({
            url : API_ENDPOINT,
            method : "GET",
            params : {
                'q' : q,
                'alt' : 'json'
            }
        });

        req.success(function(data) {
            cb(data.feed.entry.map(transformItem));
        });
    }

    return {
        getVideo : getVideo,
        search : search
    };
});