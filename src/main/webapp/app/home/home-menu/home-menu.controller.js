(function () {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .controller('HomeMenuController', HomeMenuController);

    HomeMenuController.$inject = ['$state','GetMyTeam'];

    function HomeMenuController($state,GetMyTeam) {
        var vm = this;
        vm.isClick =false;
        // console.log($state);
        GetMyTeam.get(null, function (response) {
            if(response.message!=="非队长不能查询"){
                vm.isClick = true;
            }
            else {
                vm.isClick =false;
            }
        });
        vm.activeItem = $state.$current.name;
        // console.log(vm.activeItem);

        if ($state.current.url==='/main') {
            angular.element(window).scroll(function () {
                if (angular.element(window).scrollTop() >= 608) {
                    angular.element('.scroll-navbar')
                        .addClass('isFixed')
                } else {
                    angular.element('.scroll-navbar')
                        .removeClass('isFixed')
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
