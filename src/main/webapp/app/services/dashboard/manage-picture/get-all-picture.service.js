(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .factory('GetAllPicture', GetAllPicture);

    GetAllPicture.$inject = ['$resource'];

    function GetAllPicture ($resource) {
        var service = $resource('api/ms-picture/get-all-picture', {}, {
            'get': { method: 'GET'}
        });
        return service;
    }
})();

