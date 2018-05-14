/**
 * Created by OlyLis on 2017/3/26.
 */
(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .factory('LeaderCommentGetAllComment', LeaderCommentGetAllComment);

    LeaderCommentGetAllComment.$inject = ['$resource'];

    function LeaderCommentGetAllComment ($resource) {
        var service = $resource('api/ms-comment/all-comment/leader-comment/:id', {}, {
            'get': { method: 'GET', isArray: false,   //使用该get方法后，服务器返回的不是一个数组
                interceptor: {
                    response: function(response) {
                        // expose response
                        return response;
                    }
                }
            }
        });

        return service;
    }
})();
