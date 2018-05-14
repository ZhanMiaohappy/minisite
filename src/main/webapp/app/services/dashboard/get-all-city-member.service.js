(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .factory('GetAllCityMember', GetAllCityMember);

    GetAllCityMember.$inject = ['$resource'];

    function GetAllCityMember ($resource) {
        var service = $resource('api/ms-city/viewer/get-all-city-member', {}, {
            'get': { method: 'GET'}
        });
        return service;
    }
})();

