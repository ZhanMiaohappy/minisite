angular
    .module('bsbmsoneApp')
    .directive('homeMenu', homeMenu);

function homeMenu() {
    var directive = {
        templateUrl: 'app/home/home-menu/home-menu.html',
        restrict: 'EA',
        scope: {
        },
        controller: 'HomeMenuController',
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;
}
