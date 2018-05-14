/**
 * Created by rhd on 2017/8/19.
 */
(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .factory('EditTeamRegistrations', EditTeamRegistrations);

    EditTeamRegistrations.$inject = ['$resource'];

    function EditTeamRegistrations($resource) {
        var service = $resource('/api/ms-registrations/edit/team/:teamid', {}, {
            'save': { method: 'POST'}
        });
        return service;
    }
})();

