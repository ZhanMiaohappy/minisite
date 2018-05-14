(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('rule', {
            parent: 'app',
            url: '/rule',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/rule-or-intro/rule-or-intro.html',
                    controller: 'RuleOrIntroController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
