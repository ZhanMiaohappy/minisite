angular
     .module('bsbmsoneApp')
     .directive('gameMenu',gameMenu);

function gameMenu(){
    var directive={
        templateUrl:'app/game/game-menu/game-menu.html',
        restrict:'EA',
        scope:{
        },
        controller:'GameMenuController',
        controllerAs:'vm',
        bindToController:true
    };
    return directive;
}
