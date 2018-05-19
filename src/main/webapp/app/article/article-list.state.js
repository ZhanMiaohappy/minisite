(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('article-list', {
            parent: 'app',
            url: '/articles',    //后面输入url就可以访问
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/article/article-list.html',
                    controller: 'ArticleListController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        });
    }
})();

