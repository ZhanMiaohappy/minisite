(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .factory('GetVideoByTag', GetVideoByTag);

    GetVideoByTag.$inject = ['$resource'];

    function GetVideoByTag ($resource) {

        var service = $resource('api/ms-video/get-video-by-tag/tag/:tag', {}, {
            'get': {method: 'GET', isArray:true}
        });

        return service;
    }
})();
