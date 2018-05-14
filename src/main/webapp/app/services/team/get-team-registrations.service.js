/**
 * Created by rhd on 2017/8/19.
 */
(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .factory('GetTeamRegistrations', GetTeamRegistrations);

    GetTeamRegistrations.$inject = ['$resource'];

    function GetTeamRegistrations($resource) {
        var service = $resource('/api/ms-registrations/get-team/:teamid', {}, {
            'query': { method: 'GET',isArray: true}
        });
        return service;
    }
})();

