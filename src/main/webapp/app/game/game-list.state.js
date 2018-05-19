/**
         created by zz (2018/5/18)
 */
(function(){
    'use strict';

    angular
        .module('bsbmsoneApp')
        .config(stateConfig);

    stateConfig.$inject=['$stateProvider'];

    function stateConfig($stateProvider){
        $stateProvider.state('game-list',{
            parent:'app',
            url:'/game',
            data:{
                authorities:[]
            },
            views:{
                'content@':{
                    templateUrl:'app/game/game-list.html',
                    controller:'GameController',
                    controllerAs:'vm'
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
