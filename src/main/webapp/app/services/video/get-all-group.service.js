(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .factory('GetAllGroup', GetAllGroup);

    GetAllGroup.$inject = ['$resource'];

    function GetAllGroup ($resource) {
        var service = $resource('api/ms-video/get-all', {}, {
            'query': {method: 'GET', params: {}, isArray: false}
        });
        return service;
    }
})();
