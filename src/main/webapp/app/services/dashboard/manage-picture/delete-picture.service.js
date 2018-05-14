/**
 * Created by arslan2012 on 2017/10/24.
 */
(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .factory('DeletePicture', DeletePicture);

    DeletePicture.$inject = ['$resource'];

    function DeletePicture($resource) {
        var service = $resource('api/ms-picture/delete-picture/picture/:pictureid', {}, {
            'save': { method: 'POST' }
        });
        return service;
    }
})();
