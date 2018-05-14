/**
 * Created by rhd on 2017/8/19.
 */
(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .factory('GetAllPersonel', GetAllPersonel);

    GetAllPersonel.$inject = ['$resource'];

    function GetAllPersonel($resource) {
        var service = $resource('/api/ms-registrations/get-all', {}, {
            'query': { method: 'GET',isArray:true}
        });
        return service;
    }
})();

