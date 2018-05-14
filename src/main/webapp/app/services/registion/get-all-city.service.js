(function () {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .factory('GetAllCity', GetAllCity);

    GetAllCity.$inject = ['$resource'];

    function GetAllCity($resource) {
        var service = $resource('api/ms-city/viewer/get-all-city', {}, {
            'get': {method: 'GET'}
        });
        return service;
    }
})();
