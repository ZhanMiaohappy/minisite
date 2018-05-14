/**
 * Created by OlyLis on 2017/3/14.
 */
(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .directive('newsReplyItem', newsReplyItem);

    function newsReplyItem() {
        var directive = {
            templateUrl: 'app/article/util/news-reply-item/news-reply-item.html',
            restrict: 'EA',
            scope: {
                articleId: '=',
                comment: '='
            },
            controller: 'NewsReplyItemController',
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;
    }
})();
