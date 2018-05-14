(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .factory('UploadPicture', UploadPicture);

    UploadPicture.$inject = ['$resource'];

    function UploadPicture($resource) {
        var service = $resource('api/ms-picture/upload-picture', {}, {
            'save': { method: 'POST' }
        });
        return service;
    }
})();
