(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .factory('GetCityNumber', GetCityNumber);

    GetCityNumber.$inject = ['$resource'];

    function GetCityNumber ($resource) {
        var service = $resource('api/ms-city/viewer/get-number', {}, {
            'get': { method: 'GET',isArray:true}
        });
        return service;
    }
})();

