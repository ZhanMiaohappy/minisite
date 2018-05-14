/**
 * Created by rhd on 2017/8/19.
 */
(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .factory('GetMyTeam', GetMyTeam);

    GetMyTeam.$inject = ['$resource'];

    function GetMyTeam($resource) {
        var service = $resource('/api/ms-registrations/get-my-team', {}, {
            'query': { method: 'get',isArray: true}
        });
        return service;
    }
})();

