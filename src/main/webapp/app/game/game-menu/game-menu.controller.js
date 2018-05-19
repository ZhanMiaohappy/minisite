(function(){
    'use restrict';

    angular
        .module('bsbmsoneApp')
        .controller('GameMenuController',GameMenuController);

    GameMenuController.$inject=['$scope','$state'];

    function GameMenuController($scope,$state) {
        var vm =this;
        vm.isclick= true;

        if ($state.current.url==='/game') {
            angular.element(window).scroll(function () {
                if (angular.element(window).scrollTop() >= 100) {
                    angular.element('.game-menu-wrap')
                        .addClass('qqq')
                } else {
                    angular.element('.game-menu-wrap')
                        .removeClass('qqq')
                }
            });
        } else {
            angular.element(window).scroll(function () {
                if (angular.element(window).scrollTop() >= 50) {
                    angular.element('.scroll-navbar')
                        .addClass('isFixed')
                } else {
                    angular.element('.scroll-navbar')
                        .removeClass('isFixed')
                }
            });
        }


    }
})();
